export function initNavbar() {
  const toggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')

  if (!toggle || !mobileMenu) return

  toggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.hasAttribute('hidden')
    mobileMenu.toggleAttribute('hidden', isOpen)
    toggle.setAttribute('aria-expanded', String(!isOpen))
  })

  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.setAttribute('hidden', '')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}
