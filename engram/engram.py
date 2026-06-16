#!/usr/bin/env python3
"""
Engram — Memoria Persistente para el Agente.

Base de datos SQLite que guarda:
- Decisiones arquitectónicas (architectural_decisions)
- Bugs resueltos (resolved_bugs)
- Aprendizajes (learnings)

Uso:
  python3 engram/engram.py add decision "Qué" "Por qué" "Dónde" [tags...]
  python3 engram/engram.py add bug "Qué problema" "Causa" "Solución" [tags...]
  python3 engram/engram.py add learning "Contexto" "Insight" "Fuente" [tags...]
  python3 engram/engram.py query [--type decision|bug|learning] [--tag TAG] [--limit N]
  python3 engram/engram.py recent [--limit N]
  python3 engram/engram.py search "término"
"""

import sqlite3
import sys
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "engram.db")


def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    conn = get_conn()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS architectural_decisions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            rationale TEXT NOT NULL,
            location TEXT NOT NULL,
            tags TEXT DEFAULT '',
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
        CREATE TABLE IF NOT EXISTS resolved_bugs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            problem TEXT NOT NULL,
            cause TEXT NOT NULL,
            solution TEXT NOT NULL,
            location TEXT DEFAULT '',
            tags TEXT DEFAULT '',
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
        CREATE TABLE IF NOT EXISTS learnings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            context TEXT NOT NULL,
            insight TEXT NOT NULL,
            source TEXT DEFAULT '',
            tags TEXT DEFAULT '',
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
        CREATE VIRTUAL TABLE IF NOT EXISTS engram_fts USING fts5(
            content, category, tags,
            content=''
        );
    """)
    conn.commit()
    conn.close()


def add_entry(entry_type: str, *args):
    conn = get_conn()
    cursor = conn.cursor()

    if entry_type == "decision":
        if len(args) < 3:
            print("Error: Se requieren: question, rationale, location")
            sys.exit(1)
        question, rationale, location = args[0], args[1], args[2]
        tags = " ".join(args[3:]) if len(args) > 3 else ""
        cursor.execute(
            "INSERT INTO architectural_decisions (question, rationale, location, tags) VALUES (?, ?, ?, ?)",
            (question, rationale, location, tags),
        )

    elif entry_type == "bug":
        if len(args) < 3:
            print("Error: Se requieren: problem, cause, solution")
            sys.exit(1)
        problem, cause, solution = args[0], args[1], args[2]
        tags = " ".join(args[3:]) if len(args) > 3 else ""
        cursor.execute(
            "INSERT INTO resolved_bugs (problem, cause, solution, tags) VALUES (?, ?, ?, ?)",
            (problem, cause, solution, tags),
        )

    elif entry_type == "learning":
        if len(args) < 2:
            print("Error: Se requieren: context, insight [source]")
            sys.exit(1)
        context, insight = args[0], args[1]
        source = args[2] if len(args) > 2 else ""
        tags = " ".join(args[3:]) if len(args) > 3 else ""
        cursor.execute(
            "INSERT INTO learnings (context, insight, source, tags) VALUES (?, ?, ?, ?)",
            (context, insight, source, tags),
        )

    else:
        print(f"Error: Tipo desconocido '{entry_type}'. Usa: decision, bug, learning")
        sys.exit(1)

    conn.commit()
    entry_id = cursor.lastrowid
    print(f"✓ {entry_type} #{entry_id} guardado en Engram")
    conn.close()


def query_entries(entry_type=None, tag=None, limit=10):
    conn = get_conn()
    results = []

    tables = {
        "decision": ("architectural_decisions", "question", "rationale", "location"),
        "bug": ("resolved_bugs", "problem", "cause", "solution"),
        "learning": ("learnings", "context", "insight", "source"),
    }

    for t, (table, col1, col2, col3) in tables.items():
        if entry_type and entry_type != t:
            continue

        sql = f"SELECT id, {col1} as a, {col2} as b, {col3} as c, tags, created_at FROM {table}"
        params = []
        conditions = []

        if tag:
            conditions.append("tags LIKE ?")
            params.append(f"%{tag}%")

        if conditions:
            sql += " WHERE " + " AND ".join(conditions)

        sql += " ORDER BY created_at DESC LIMIT ?"
        params.append(limit)

        cursor = conn.execute(sql, params)
        for row in cursor.fetchall():
            results.append(
                {
                    "type": t,
                    "id": row["id"],
                    "col1": row["a"],
                    "col2": row["b"],
                    "col3": row["c"],
                    "tags": row["tags"],
                    "created_at": row["created_at"],
                }
            )

    conn.close()
    return results


def format_results(results):
    if not results:
        print("(sin resultados)")
        return

    for r in results:
        type_icon = {"decision": "🧠", "bug": "🐛", "learning": "💡"}
        print(f"\n{type_icon.get(r['type'], '📄')} [{r['type']} #{r['id']}] — {r['created_at']}")
        print(f"  Tags: {r['tags'] or '(sin tags)'}")
        print(f"  ───")
        print(f"  {r['col1']}")
        if r["col2"]:
            print(f"  → {r['col2']}")
        if r["col3"]:
            print(f"  → {r['col3']}")
        print()


def main():
    if not os.path.exists(DB_PATH):
        init_db()
        print("✦ Engram DB inicializada en", DB_PATH)

    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)

    action = sys.argv[1]

    if action == "add":
        if len(sys.argv) < 3:
            print("Error: add necesita un tipo (decision|bug|learning)")
            sys.exit(1)
        add_entry(sys.argv[2], *sys.argv[3:])

    elif action == "query":
        entry_type = None
        tag = None
        limit = 10

        i = 2
        while i < len(sys.argv):
            if sys.argv[i] == "--type" and i + 1 < len(sys.argv):
                entry_type = sys.argv[i + 1]
                i += 2
            elif sys.argv[i] == "--tag" and i + 1 < len(sys.argv):
                tag = sys.argv[i + 1]
                i += 2
            elif sys.argv[i] == "--limit" and i + 1 < len(sys.argv):
                limit = int(sys.argv[i + 1])
                i += 2
            else:
                i += 1

        results = query_entries(entry_type, tag, limit)
        format_results(results)

    elif action == "recent":
        limit = 10
        if len(sys.argv) > 2 and sys.argv[2] == "--limit" and len(sys.argv) > 3:
            limit = int(sys.argv[3])
        results = query_entries(limit=limit)
        format_results(results)

    elif action == "search":
        if len(sys.argv) < 3:
            print("Error: search necesita un término de búsqueda")
            sys.exit(1)
        term = sys.argv[2]
        conn = get_conn()

        # Buscar en todas las tablas
        results = []
        for table, col1, col2 in [
            ("architectural_decisions", "question", "rationale"),
            ("resolved_bugs", "problem", "cause"),
            ("learnings", "context", "insight"),
        ]:
            cursor = conn.execute(
                f"SELECT id, '{table}' as tbl, {col1} as a, {col2} as b, tags, created_at FROM {table} WHERE {col1} LIKE ? OR {col2} LIKE ? OR tags LIKE ? LIMIT 5",
                (f"%{term}%", f"%{term}%", f"%{term}%"),
            )
            for row in cursor.fetchall():
                results.append(row)
        conn.close()

        if results:
            print(f"🔍 Resultados para '{term}':")
            for r in results:
                type_map = {
                    "architectural_decisions": "decision",
                    "resolved_bugs": "bug",
                    "learnings": "learning",
                }
                t = type_map.get(r["tbl"], "?")
                print(f"\n  [{t} #{r['id']}] {r['a']}")
                print(f"    {r['b']}")
        else:
            print(f"🔍 Sin resultados para '{term}'")

    else:
        print(f"Error: Acción desconocida '{action}'")
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
