import styles from './styles/about.module.css'
import ui from '../components/styles/ui.module.css'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { Button, Section, SectionHeader } from '../components/ui'
import { useApply } from '../context/apply'
import { OVERLAYS } from '../utils/overlays'
import { cx } from '../utils/cx'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/about-hero.jpg'
import visionImg from '../assets/figma/about-vision.jpg'
import missionImg from '../assets/figma/about-mission.jpg'
import founderImg from '../assets/figma/leader-founder.webp'
import chairmanImg from '../assets/figma/leader-chairman.webp'
import principalImg from '../assets/figma/leader-principal.webp'
import iconArrowGold from '../assets/figma/arrow-right-gold.svg'

const visionMission = [
    {
        title: 'Our Vision',
        image: visionImg,
        text: 'To be a centre of excellence in hospitality and catering education, producing globally competent professionals who embody excellence, ethics, and innovation.'
    },
    {
        title: 'Our Mission',
        image: missionImg,
        text: 'To provide quality hospitality education through practical learning, industry exposure, professional development, and student-centred training.'
    }
]

const coreValues = ['Excellence', 'Professionalism', 'Innovation', 'Hospitality', 'Leadership', 'Service']

const milestones = [
    { year: '2005', title: 'Institution Established', text: 'Foundation laid for excellence in hospitality education.' },
    { year: '2010', title: 'Hospitality Training Expansion', text: 'Introduced advanced culinary and management programs.' },
    { year: '2015', title: 'Industry Collaborations', text: 'Partnered with top hotel chains for student placements.' },
    { year: '2020', title: 'Infrastructure Enhancement', text: 'Upgraded to state-of-the-art training kitchens and labs.' },
    { year: '2026', title: 'Future Hospitality Leaders', text: 'Continuing the legacy of producing global professionals.' }
]

const leaders = [
    {
        heading: 'Founder’s Message',
        name: 'Shri. R. Chinnathambi',
        role: 'Founder',
        org: 'Mother Teresa Educational & Charitable Trust',
        photo: founderImg,
        paragraphs: [
            'Our Founder is widely respected for his contributions to the field of education. With a strong vision to uplift society through knowledge, he has played a key role in establishing and developing institutions that serve students across diverse disciplines.',
            'Driven by a commitment to promote quality education in rural areas, he continues to inspire the institution’s mission of providing accessible, meaningful, and value-based education.'
        ]
    },
    {
        heading: 'Chairman’s Message',
        name: 'Shri. R. C. Uthayakumar, B.A.',
        role: 'Chairman',
        org: 'Mother Teresa Educational & Charitable Trust',
        photo: chairmanImg,
        paragraphs: [
            'Our Chairman is a visionary leader, philanthropist, and entrepreneur dedicated to providing value-based education, particularly for students from rural and underserved communities. Through his leadership, the institution has grown into a multi-disciplinary educational group focused on academic excellence and holistic development.',
            'He emphasises bridging theory and practice to equip students with practical skills and real-world knowledge. With a strong commitment to growth, innovation, and social responsibility, he continues to inspire and guide the institution towards a brighter future.'
        ]
    },
    {
        heading: 'Principal’s Message',
        name: 'Mr. R. Chandra Sekar (MHM., PGDHM)',
        role: 'Principal',
        org: 'Mother Teresa College of Hotel Management & Catering Technology',
        photo: principalImg,
        paragraphs: [
            'Welcome to Mother Teresa College of HMCT. We are committed to equipping students with the knowledge, practical skills, and professional values needed to thrive in the hospitality industry. Through industry-focused training, modern facilities, and dedicated faculty support, we help students become skilled hospitality professionals.',
            'Our Industrial Exposure Training (IET) program offers valuable hands-on experience in reputed hotels, bridging the gap between classroom learning and industry expectations. We foster discipline, professionalism, leadership, and service excellence, preparing students for successful and rewarding careers in hospitality.'
        ]
    }
]

const About = () => {
    const { openApply } = useApply()

    return (
        <>
            <PageHero
                image={heroImg}
                overlay={OVERLAYS.left50}
                title={['About Mother Teresa', 'Catering College']}
                stacked
                text="Dedicated to excellence in hospitality education since 2005."
            >
                <Button variant="outline" iconRight={iconArrowGold} to="/#programs">Explore Program</Button>
                <Button onClick={openApply}>Apply Now</Button>
            </PageHero>

            <Section innerClassName={styles.overviewInner}>
                <SectionHeader
                    gap={20}
                    eyebrow="Institution Overview"
                    title="Shaping the Future of Global Hospitality"
                    subtitle="Mother Teresa Catering College is dedicated to excellence in hospitality education. Through innovative teaching methodologies, practical training and industry partnerships, we prepare students to become skilled professionals and future leaders in the hospitality sector."
                    subtitleClassName={styles.overviewText}
                />
                <div className={ui.grid2}>
                    {visionMission.map((item, i) => (
                        <div key={item.title} className={styles.vmCard} data-animate={i === 0 ? 'fade-right' : 'fade-left'}>
                            <img src={item.image} alt="" loading="lazy" />
                            <h3 className={styles.vmTitle}>{item.title}</h3>
                            <p className={styles.vmText}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section beige>
                <SectionHeader title="Core Values" />
                <div className={styles.values}>
                    {coreValues.map((value, i) => (
                        <div key={value} className={styles.value} {...reveal('zoom-in', i, { step: 80 })}>{value}</div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader title="Our Story" titleClassName={styles.storyTitle} />
                <div className={ui.wrapCenter}>
                    {milestones.map((item, i) => (
                        <div key={item.year} className={cx(ui.infoCard, ui.fixed3, styles.milestone)} {...reveal('fade-up', i, { cols: 3, step: 120 })}>
                            <span className={styles.year}>{item.year}</span>
                            <h3 className={ui.infoCardTitle}>{item.title}</h3>
                            <p className={ui.infoCardText}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section beige innerClassName={styles.leadersInner}>
                <SectionHeader
                    className={styles.leadersHeader}
                    title="Leadership Messages"
                    titleClassName={styles.leadersTitle}
                    subtitle="Meet the visionary leaders whose guidance, experience, and commitment continue to shape the growth and excellence of Mother Teresa College of Hotel Management & Catering Technology."
                    subtitleClassName={styles.leadersSubtitle}
                />
                <div className={styles.leaders}>
                    {leaders.map((leader, index) => (
                        <article key={leader.heading} className={cx(styles.leader, index % 2 === 1 && styles.leaderReverse)}>
                            <div className={styles.leaderText} data-animate={index % 2 === 1 ? 'fade-left' : 'fade-right'}>
                                <h3 className={styles.leaderHeading}>{leader.heading}</h3>
                                <div className={styles.leaderBody}>
                                    <p>
                                        <span className={styles.leaderName}>{leader.name}<br />{leader.role},</span>{' '}
                                        <span className={styles.leaderOrg}>{leader.org}</span>
                                    </p>
                                    {leader.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                                </div>
                            </div>
                            <img className={styles.leaderPhoto} src={leader.photo} alt={leader.name} loading="lazy" {...reveal('zoom-in', 0, { delay: 200 })} />
                        </article>
                    ))}
                </div>
            </Section>

            <CtaBanner />
        </>
    )
}

export default About
