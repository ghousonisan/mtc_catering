import { Link } from 'react-router-dom'
import styles from './styles/ui.module.css'
import { cx } from '../utils/cx'

export const Section = ({ id, beige, className, innerClassName, children }) => (
    <section id={id} className={cx(styles.section, beige && styles.beige, className)}>
        <div className={cx(styles.inner, innerClassName)}>{children}</div>
    </section>
)

// Headers fade up by default; pass `animate={false}` to opt out.
export const SectionHeader = ({
    eyebrow, title, subtitle, gap = 16, as: Title = 'h2', animate = 'fade-up',
    className, eyebrowClassName, titleClassName, subtitleClassName
}) => (
    <div className={cx(styles.header, className)} style={{ gap }} data-animate={animate || undefined}>
        {eyebrow && <p className={cx(styles.eyebrow, eyebrowClassName)}>{eyebrow}</p>}
        {title && <Title className={cx(styles.title, titleClassName)}>{title}</Title>}
        {subtitle && <p className={cx(styles.subtitle, subtitleClassName)}>{subtitle}</p>}
    </div>
)

/**
 * Renders a router Link (`to`), plain anchor (`href`) or button (`onClick`).
 * `variant`: primary | outline | outlineWhite. Icons sit left or right of the label.
 */
export const Button = ({ variant = 'primary', to, href, iconLeft, iconRight, className, children, ...rest }) => {
    const classes = cx(styles.btn, styles[variant], className)
    const content = (
        <>
            {iconLeft && <img src={iconLeft} alt="" aria-hidden="true" />}
            {children}
            {iconRight && <img src={iconRight} alt="" aria-hidden="true" />}
        </>
    )

    // data-variant lets layouts reorder buttons (e.g. primary first on mobile heroes).
    if (to) return <Link to={to} className={classes} data-variant={variant} {...rest}>{content}</Link>
    if (href) return <a href={href} className={classes} data-variant={variant} {...rest}>{content}</a>
    return <button type="button" className={classes} data-variant={variant} {...rest}>{content}</button>
}

export const ImageCard = ({ image, title, text, height = 240, fadeFrom = '60%', fadeTo = '100%', className, style, children, ...rest }) => (
    <div
        className={cx(styles.imageCard, className)}
        style={{ height, '--fade-from': fadeFrom, '--fade-to': fadeTo, ...style }}
        {...rest}
    >
        <img src={image} alt="" loading="lazy" />
        {title && <h3 className={styles.imageCardTitle}>{title}</h3>}
        {text && <p className={styles.imageCardText}>{text}</p>}
        {children}
    </div>
)

export const Pill = ({ icon, bordered, className, children, ...rest }) => (
    <div className={cx(styles.pill, bordered && styles.pillBordered, className)} {...rest}>
        {icon}
        <span>{children}</span>
    </div>
)

export const InfoCard = ({ title, text, className, ...rest }) => (
    <div className={cx(styles.infoCard, className)} {...rest}>
        <h3 className={styles.infoCardTitle}>{title}</h3>
        {text && <p className={styles.infoCardText}>{text}</p>}
    </div>
)

export const Tag = ({ className, children, ...rest }) => (
    <div className={cx(styles.tag, className)} {...rest}>{children}</div>
)
