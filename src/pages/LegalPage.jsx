import styles from './styles/legal.module.css'
import CtaBanner from '../components/CtaBanner'
import { Section, SectionHeader } from '../components/ui'
import { LEGAL_PAGES } from '../data/site'

// Paragraphs are plain strings, or `{ lead, text }` where the lead renders in bold.
const Rich = ({ value }) =>
    typeof value === 'string' ? value : (
        <>
            <span className={styles.lead}>{value.lead}</span> {value.text}
        </>
    )

const LegalPage = ({ page }) => {
    const { eyebrow, title, intro, sections } = LEGAL_PAGES[page]

    return (
        <>
            <section className={styles.intro}>
                <div className={styles.introInner}>
                    <SectionHeader as="h1" eyebrow={eyebrow} eyebrowClassName={styles.eyebrow} title={title} subtitle={intro} />
                </div>
            </section>

            <Section>
                <div className={styles.list}>
                    {sections.map((section, index) => (
                        <div key={section.title} className={styles.item} data-animate="fade-up">
                            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                            <div className={styles.body}>
                                <h2 className={styles.title}>{section.title}</h2>
                                <div>
                                    {section.paragraphs.map((paragraph, i) => (
                                        <p key={i}><Rich value={paragraph} /></p>
                                    ))}
                                    {section.bullets && (
                                        <ul className={styles.bullets}>
                                            {section.bullets.map((bullet, i) => (
                                                <li key={i}><Rich value={bullet} /></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <CtaBanner />
        </>
    )
}

export default LegalPage
