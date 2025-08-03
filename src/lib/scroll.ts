export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80 // Height of fixed header
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}