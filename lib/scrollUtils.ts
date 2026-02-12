export const smoothScrollToElement = (elementId: string) => {
  const target = document.getElementById(elementId)
  if (!target) return

  const start = window.scrollY
  const end = target.getBoundingClientRect().top + window.scrollY
  const duration = 600
  let startTime: number | null = null

  const animateScroll = (time: number) => {
    if (!startTime) startTime = time
    const progress = Math.min((time - startTime) / duration, 1)

    // Ease-in-out function for smooth animation
    const easeInOut = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

    window.scrollTo(0, start + (end - start) * easeInOut)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}
