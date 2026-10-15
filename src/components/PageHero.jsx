import styles from './styles/blocks.module.css'
import { reveal } from '../utils/reveal'

/**
 * Full-bleed photo hero used at the top of each page.
 * `title` is `[main, highlight]`; the highlight renders in gold, on its own line when `stacked`.
 */
const PageHero = ({ image, overlay, title, stacked = false, inlineOnMobile = false, text, height = 700, children, aside }) => (
    <section className={styles.hero} style={{ minHeight: height }}>
        <img className={styles.heroBg} src={image} alt="" fetchpriority="high" data-animate="zoom-out" />
        <div className={styles.heroOverlay} style={{ background: overlay }} />

        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} {...reveal('fade-up', 0, { delay: 100 })}>
                {title[0]}
                {stacked && <br className={inlineOnMobile ? styles.desktopBreak : undefined} />}
                {' '}
                <span>{title[1]}</span>
            </h1>
            {text && <p className={styles.heroText} {...reveal('fade-up', 0, { delay: 250 })}>{text}</p>}
            {children && <div className={styles.heroActions} {...reveal('fade-up', 0, { delay: 400 })}>{children}</div>}
        </div>

        {aside}
    </section>
)

export const CourseInfoCard = ({ rows }) => (
    <div className={styles.courseCard} {...reveal('fade-left', 0, { delay: 450 })}>
        <p className={styles.courseCardTitle}>Course Information</p>
        {rows.map((row) => (
            <div key={row.label} className={styles.courseRow}>
                <span className={styles.courseLabel}>{row.label}</span>
                <span className={styles.courseValue}>{row.value}</span>
            </div>
        ))}
    </div>
)

export default PageHero
