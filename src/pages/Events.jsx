import styles from './styles/media.module.css'
import PageHero from '../components/PageHero'
import { Section } from '../components/ui'
import { EVENTS } from '../data/media'
import { OVERLAYS } from '../utils/overlays'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/events-hero.jpg'
import iconDownload from '../assets/figma/download-white.svg'

const Events = () => (
    <>
        <PageHero
            image={heroImg}
            overlay={OVERLAYS.left30}
            title={['Events & News', 'Articles']}
            text="Stay updated with the latest culinary workshops, hospitality training, industry visits, competitions, campus events, and academic achievements at the College of Hotel Management & Catering Technology."
        />

        <Section>
            <div className={styles.events}>
                {EVENTS.map((event) => (
                    <article key={event.title} className={styles.event}>
                        <div className={styles.eventRow}>
                            <img className={styles.eventImage} src={event.image} alt={event.title} loading="lazy" data-animate="fade-right" />
                            <div className={styles.eventBody} {...reveal('fade-left', 0, { delay: 150 })}>
                                <div className={styles.eventText} lang={event.lang}>
                                    <p className={styles.eventMeta}>{event.type} | {event.date}</p>
                                    <h2 className={styles.eventTitle}>{event.title}</h2>
                                    <div>
                                        {event.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                                    </div>
                                </div>
                                <a
                                    className={styles.download}
                                    href={event.image}
                                    download={`${event.title}.jpg`}
                                    aria-label={`Download ${event.title} image`}
                                >
                                    <img src={iconDownload} alt="" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    </>
)

export default Events
