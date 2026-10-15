import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/home.module.css'
import ui from '../components/styles/ui.module.css'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { Button, ImageCard, Section, SectionHeader } from '../components/ui'
import { useApply } from '../context/apply'
import { OVERLAYS } from '../utils/overlays'
import { cx } from '../utils/cx'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/home-hero.jpg'
import iconArrowGold from '../assets/figma/arrow-right-gold.svg'
import iconArrowWhite from '../assets/figma/arrow-right-white.svg'
import iconArrowUpRight from '../assets/figma/arrow-up-right-white.svg'
import iconChevron from '../assets/figma/chevron-down-gold.svg'

import progDiploma from '../assets/figma/prog-diploma.jpg'
import progBsc from '../assets/figma/prog-bsc.jpg'
import progCert from '../assets/figma/prog-cert.jpg'

import domCulinary from '../assets/figma/dom-culinary.svg'
import domHotel from '../assets/figma/dom-hotel.svg'
import domBakery from '../assets/figma/dom-bakery.svg'
import domFnb from '../assets/figma/dom-fnb.svg'
import domEntre from '../assets/figma/dom-entre.svg'
import domGlobal from '../assets/figma/dom-global.svg'

import campLibrary from '../assets/figma/camp-library.jpg'
import campLabs from '../assets/figma/camp-labs.jpg'
import campSports from '../assets/figma/camp-sports.jpg'
import campHostel from '../assets/figma/camp-hostel.jpg'
import campAuditorium from '../assets/figma/camp-auditorium.jpg'
import campCafeteria from '../assets/figma/camp-cafeteria.jpg'

import carHotels from '../assets/figma/car-hotels.jpg'
import carDining from '../assets/figma/car-dining.jpg'
import carCruise from '../assets/figma/car-cruise.jpg'
import carAirlines from '../assets/figma/car-airlines.jpg'
import carEvents from '../assets/figma/car-events.jpg'
import carBakery from '../assets/figma/car-bakery.jpg'
import carEntre from '../assets/figma/car-entre.jpg'
import carIntl from '../assets/figma/car-intl.jpg'

import avatar1 from '../assets/figma/avatar-1.jpg'
import avatar2 from '../assets/figma/avatar-2.jpg'

import gal1 from '../assets/figma/gal-1.jpg'
import gal2 from '../assets/figma/gal-2.jpg'
import gal3 from '../assets/figma/gal-3.jpg'
import gal4 from '../assets/figma/gal-4.jpg'
import gal5 from '../assets/figma/gal-5.jpg'
import gal6 from '../assets/figma/gal-6.jpg'
import gal7 from '../assets/figma/gal-7.jpg'
import gal8 from '../assets/figma/gal-8.jpg'
import gal9 from '../assets/figma/gal-9.jpg'
import gal10 from '../assets/figma/gal-10.jpg'

const programs = [
    { tag: 'Diploma', title: 'Diploma in Hotel Management', image: progDiploma, to: '/academics/diploma' },
    { tag: 'Undergraduate', title: 'B.Sc (Hotel Management)', image: progBsc, to: '/academics/bsc' },
    { tag: 'Certificate course', title: 'Certificate course in Hotel Management', image: progCert, to: '/academics/certificate' }
]

const domains = [
    { icon: domCulinary, title: 'Culinary Arts', text: 'Master the art of food preparation, presentation, and kitchen management.' },
    { icon: domHotel, title: 'Hotel Management', text: 'Learn the operational and managerial aspects of modern hospitality businesses.' },
    { icon: domBakery, title: 'Bakery & Confectionery', text: 'Develop expertise in baking, pastry arts, and dessert production.' },
    { icon: domFnb, title: 'Food & Beverage', text: 'Deliver exceptional guest experiences through professional service standards.' },
    { icon: domEntre, title: 'Entrepreneurship', text: 'Build the knowledge and confidence required to launch hospitality ventures.' },
    { icon: domGlobal, title: 'Global Careers', text: 'Prepare for international opportunities in luxury hospitality.' }
]

const campus = [
    { title: 'Library', image: campLibrary },
    { title: 'Labs', image: campLabs },
    { title: 'Sports', image: campSports },
    { title: 'Hostel', image: campHostel },
    { title: 'Auditorium', image: campAuditorium },
    { title: 'Cafeteria', image: campCafeteria }
]

const careers = [
    { title: 'Hotels & Resorts', image: carHotels, text: 'Build rewarding careers in luxury hotels, resorts, and hospitality establishments worldwide.' },
    { title: 'Fine Dining', image: carDining, text: 'Master guest service, restaurant operations, and exceptional dining experiences.' },
    { title: 'Cruise Lines', image: carCruise, text: 'Explore global opportunities in hospitality, food service, and guest relations at sea.' },
    { title: 'Airlines & Catering', image: carAirlines, text: 'Deliver world-class food service and hospitality in aviation and airline catering industries.' },
    { title: 'Event Management', image: carEvents, text: 'Plan, coordinate, and execute memorable events, celebrations, and corporate functions.' },
    { title: 'Bakery Business', image: carBakery, text: 'Turn your passion for baking into a successful career or entrepreneurial venture.' },
    { title: 'Entrepreneurship', image: carEntre, text: 'Develop the skills and confidence to launch and manage your own hospitality business.' },
    { title: 'International Careers', image: carIntl, text: 'Unlock global career opportunities across hotels, tourism, catering, and hospitality sectors.' }
]

const stories = [
    {
        name: 'Rahul Sharma',
        role: 'Executive Chef, Taj Hotels',
        avatar: avatar1,
        quote: 'The practical training I received at Mother Teresa Catering College was the foundation of my culinary career. The modern kitchens and experienced faculty prepared me perfectly for the demanding environment of a 5-star hotel.'
    },
    {
        name: 'Priya Patel',
        role: 'Front Office Manager, Marriott',
        avatar: avatar2,
        quote: 'The B.Sc Hotel Management program gave me a comprehensive understanding of hospitality operations. The industry internships arranged by the college were instrumental in securing my first management role.'
    },
    {
        name: 'David Chen',
        role: 'Restaurant Owner',
        avatar: avatar1,
        quote: 'Beyond just cooking, I learned the business of hospitality. The entrepreneurship modules gave me the confidence to open my own successful fine-dining restaurant right after graduation.'
    },
    {
        name: 'David Chen',
        role: 'Restaurant Owner',
        avatar: avatar1,
        quote: 'Beyond just cooking, I learned the business of hospitality. The entrepreneurship modules gave me the confidence to open my own successful fine-dining restaurant right after graduation.'
    }
]

const gallery = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10]

const faqs = [
    {
        q: 'What courses are offered?',
        a: 'We offer a Diploma in Catering Technology (1-2 years) and a B.Sc in Hotel Management & Catering Science (3 years), along with specialized modules in Bakery, Food & Beverage, and Culinary Arts.'
    },
    {
        q: 'What is the eligibility criteria for admission?',
        a: 'For the Diploma programme, candidates must have completed their 10th standard. For the B.Sc degree programme, candidates must have successfully completed their 12th standard (10+2) from a recognized board.'
    },
    {
        q: 'Does the college provide internships?',
        a: 'Yes, industrial exposure is a mandatory part of our curriculum. We have tie-ups with leading 5-star hotels, resorts, and restaurants where students complete a 6-month internship.'
    },
    {
        q: 'Are hostel facilities available?',
        a: 'Yes, we provide separate, secure, and comfortable hostel facilities for both boys and girls with modern amenities and hygienic food.'
    },
    {
        q: 'What career opportunities are available after graduation?',
        a: 'Graduates can pursue careers as Chefs, Hotel Managers, Front Office Executives, Restaurant Managers, or join Cruise Lines, Airlines Catering, or start their own hospitality ventures.'
    },
    {
        q: 'Are placement assistance services provided?',
        a: 'Absolutely. We have a dedicated placement cell that organizes campus interviews and provides 100% placement assistance to all successful graduates.'
    },
    {
        q: 'What practical training facilities are available?',
        a: 'We have state-of-the-art facilities including a Basic Training Kitchen, Advanced Training Kitchen, Bakery & Confectionery Lab, Training Restaurant, Front Office Lab, and Housekeeping Lab.'
    },
    {
        q: 'How can I apply for admission?',
        a: 'You can apply online through our Admissions page, or visit our campus in person to collect the application form. Our counseling team is available to guide you through the process.'
    }
]

const StoriesSlider = () => {
    const trackRef = useRef(null)

    const scrollByCard = (direction) => {
        const track = trackRef.current
        const card = track?.firstElementChild
        if (!card) return
        track.scrollBy({ left: direction * (card.offsetWidth + 20) })
    }

    return (
        <div className={styles.slider} data-animate="fade-up">
            <div className={styles.track} ref={trackRef}>
                {stories.map((story) => (
                    <article key={story.name} className={styles.storyCard}>
                        <div className={styles.storyPerson}>
                            <img src={story.avatar} alt="" loading="lazy" />
                            <div>
                                <p className={styles.storyName}>{story.name}</p>
                                <p>{story.role}</p>
                            </div>
                        </div>
                        <p className={styles.storyQuote}>"{story.quote}"</p>
                    </article>
                ))}
            </div>
            <div className={styles.sliderNav}>
                {/* Outlined by default, filled on hover — the gold/white icons swap via CSS */}
                <button
                    className={cx(styles.sliderBtn, styles.sliderBtnPrev)}
                    onClick={() => scrollByCard(-1)}
                    aria-label="Previous story"
                >
                    <img className={styles.iconIdle} src={iconArrowGold} alt="" />
                    <img className={styles.iconHover} src={iconArrowWhite} alt="" />
                </button>
                <button
                    className={styles.sliderBtn}
                    onClick={() => scrollByCard(1)}
                    aria-label="Next story"
                >
                    <img className={styles.iconIdle} src={iconArrowGold} alt="" />
                    <img className={styles.iconHover} src={iconArrowWhite} alt="" />
                </button>
            </div>
        </div>
    )
}

const Faq = () => {
    const [open, setOpen] = useState(0)

    return (
        <div className={styles.faqList}>
            {faqs.map((item, index) => {
                const isOpen = open === index
                return (
                    <div key={item.q} className={cx(styles.faqItem, isOpen && styles.faqOpen)} {...reveal('fade-left', index, { step: 70 })}>
                        <button
                            className={styles.faqQuestion}
                            onClick={() => setOpen(isOpen ? -1 : index)}
                            aria-expanded={isOpen}
                        >
                            {item.q}
                            <img src={iconChevron} alt="" />
                        </button>
                        <div className={styles.faqAnswer}>
                            <div><p>{item.a}</p></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Home = () => {
    const { openApply } = useApply()

    return (
        <>
            <PageHero
                image={heroImg}
                overlay={OVERLAYS.left40}
                title={['Shaping Future Educators,', 'Inspiring Generations']}
                text="Empowering aspiring teachers with knowledge, leadership, ethics, and professional excellence through quality teacher education."
            >
                <Button variant="outline" iconRight={iconArrowGold} to="/#programs">Explore Program</Button>
                <Button onClick={openApply}>Apply Now</Button>
            </PageHero>

            <Section innerClassName={styles.aboutInner}>
                <SectionHeader
                    gap={20}
                    eyebrow="About College"
                    eyebrowClassName={styles.eyebrowSemi}
                    className={styles.aboutHeader}
                    title="Welcome To Mother Teresa College of Hotel Management & Catering Technology"
                    titleClassName={styles.aboutTitle}
                    subtitle="Mother Teresa Catering College is committed to developing hospitality professionals through quality education, practical learning, and industry exposure. Our programs combine culinary arts, hotel management, food production, and hospitality operations to prepare students for successful careers in the global hospitality industry."
                    subtitleClassName={styles.aboutText}
                />
                <Button variant="outline" iconRight={iconArrowGold} to="/about" {...reveal('fade-up', 0, { delay: 150 })}>Read Our Story</Button>
            </Section>

            <Section id="programs" beige>
                <SectionHeader
                    title="Program Offered"
                    subtitle="Comprehensive degree program designed to shape the educational leaders of tomorrow."
                />
                <div className={ui.grid3}>
                    {programs.map((program, i) => (
                        <div key={program.title} className={styles.programCard} {...reveal('zoom-in', i, { step: 150 })}>
                            <img src={program.image} alt="" loading="lazy" />
                            <p className={styles.programTag}>{program.tag}</p>
                            <h3 className={styles.programTitle}>{program.title}</h3>
                            <Button to={program.to} iconRight={iconArrowWhite}>Explore Program</Button>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    title="Hospitality Domains"
                    subtitle="Comprehensive programs designed to build expertise across all major sectors of the hospitality industry."
                    subtitleClassName={styles.domainSubtitle}
                />
                <div className={ui.grid3}>
                    {domains.map((domain, i) => (
                        <div key={domain.title} className={styles.domainCard} {...reveal('fade-up', i, { cols: 3 })}>
                            <span className={styles.iconCircle}><img src={domain.icon} alt="" /></span>
                            <h3 className={styles.domainTitle}>{domain.title}</h3>
                            <p className={styles.domainText}>{domain.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="campus" beige>
                <SectionHeader
                    className={styles.campusHeader}
                    title="Campus Life"
                    subtitle="Our graduates are highly sought after across various sectors of the global hospitality and tourism industry."
                />
                <div className={ui.grid3}>
                    {campus.map((item, i) => (
                        <ImageCard key={item.title} image={item.image} title={item.title} height={280} {...reveal('zoom-in', i, { cols: 3 })} />
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    gap={12}
                    title="Career Destinations"
                    titleClassName={styles.careerTitle}
                    subtitle="Our graduates are highly sought after across various sectors of the global hospitality and tourism industry."
                    subtitleClassName={styles.careerSubtitle}
                />
                <div className={styles.careerGrid}>
                    {careers.map((career, i) => (
                        <div key={career.title} className={styles.careerCard} {...reveal('fade-up', i, { cols: 4 })}>
                            <img src={career.image} alt="" loading="lazy" />
                            <div>
                                <h3 className={styles.careerName}>{career.title}</h3>
                                <p className={styles.careerText}>{career.text}</p>
                            </div>
                            <span className={styles.careerArrow}><img src={iconArrowUpRight} alt="" /></span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="testimonials" beige>
                <SectionHeader
                    title="Success Stories"
                    subtitle="Hear from students who transformed their passion for hospitality into successful careers."
                    subtitleClassName={styles.storiesSubtitle}
                />
                <StoriesSlider />
            </Section>

            <Section id="gallery" innerClassName={styles.galleryInner}>
                <SectionHeader
                    title="Gallery"
                    subtitle="Explore moments that reflect our vibrant campus life, achievements and community spirit."
                />
                <Link to="/gallery" className={styles.galleryWrap} aria-label="Open the full gallery">
                    <div className={styles.galleryGrid}>
                        {gallery.map((image, index) => (
                            <img key={index} src={image} alt="" loading="lazy" {...reveal('zoom-in', index, { cols: 5, step: 80 })} />
                        ))}
                    </div>
                </Link>
            </Section>

            <CtaBanner />

            <Section>
                <div className={styles.faq}>
                    <div className={styles.faqIntro} data-animate="fade-right">
                        <h2 className={ui.title}>Frequently Asked Questions</h2>
                        <p className={ui.subtitle}>Find answers to common questions about our programs, admissions, and facilities.</p>
                    </div>
                    <Faq />
                </div>
            </Section>
        </>
    )
}

export default Home
