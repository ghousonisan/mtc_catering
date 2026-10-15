import styles from './styles/blocks.module.css'
import { Button } from './ui'
import { useApply } from '../context/apply'

import ctaBg from '../assets/figma/cta-home.jpg'
import iconArrow from '../assets/figma/arrow-right-white.svg'
import iconPhone from '../assets/figma/phone-white.svg'

const CtaBanner = () => {
    const { openApply } = useApply()

    return (
        <section className={styles.cta}>
            <img src={ctaBg} alt="" loading="lazy" data-animate="zoom-out" />
            <div className={styles.ctaContent} data-animate="zoom-in">
                <div className={styles.ctaText}>
                    <h2 className={styles.ctaTitle}>
                        Begin Your Path in Hotel <span>Management & Catering</span>
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Step into a dynamic world where innovation, skill, and dedication unite to craft thriving hospitality careers.
                    </p>
                </div>
                <div className={styles.ctaActions}>
                    <Button iconRight={iconArrow} onClick={openApply}>Apply Now</Button>
                    <Button variant="outlineWhite" iconLeft={iconPhone} to="/contact">Contact for Admissions</Button>
                </div>
            </div>
        </section>
    )
}

export default CtaBanner
