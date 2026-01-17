import type { Directive } from 'vue'

interface ScrollRevealBinding {
  delay?: number
  threshold?: number
  rootMargin?: string
}

export const vScrollReveal: Directive<HTMLElement, ScrollRevealBinding | undefined> = {
  mounted(el, binding) {
    const { delay = 0, threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = binding.value || {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                el.classList.add('visible')
              }, delay)
            } else {
              el.classList.add('visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
  },
}
