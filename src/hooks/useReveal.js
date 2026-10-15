import { useEffect } from 'react'

const SELECTOR = '[data-animate]:not([data-revealed])'

// Marks [data-animate] elements with `data-revealed` as they scroll into view.
// An attribute (not a class) is used on purpose: React rewrites `className` on re-render
// (e.g. when an FAQ item opens), which would wipe a class and hide the element again.
// A MutationObserver picks up elements rendered later (route changes, lightbox, etc.).
export const useReveal = () => {
    useEffect(() => {
        const root = document.documentElement
        if (!('IntersectionObserver' in window)) return

        root.classList.add('reveal-ready')

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.setAttribute('data-revealed', '')
                    io.unobserve(entry.target)
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        const observeAll = (scope = document) => scope.querySelectorAll(SELECTOR).forEach((el) => io.observe(el))
        observeAll()

        const mo = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== 1) return
                    if (node.matches(SELECTOR)) io.observe(node)
                    observeAll(node)
                })
            })
        })
        mo.observe(document.body, { childList: true, subtree: true })

        return () => {
            io.disconnect()
            mo.disconnect()
            root.classList.remove('reveal-ready')
        }
    }, [])
}
