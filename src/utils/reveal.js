/**
 * Props for a scroll-reveal animation.
 * `type`: fade-up | fade-down | fade-right | fade-left | zoom-in | zoom-out | fade
 * `index` + `cols` stagger items in a grid by column, so long lists don't build up huge delays.
 */
export const reveal = (type = 'fade-up', index = 0, { step = 100, cols, delay = 0 } = {}) => {
    const position = cols ? index % cols : index
    return {
        'data-animate': type,
        style: { '--delay': `${delay + position * step}ms` }
    }
}
