import styles from './styles/program.module.css'
import ui from '../components/styles/ui.module.css'
import CtaBanner from '../components/CtaBanner'
import { ProgramHero, ProgramOverview } from '../components/ProgramSections'
import { ImageCard, Pill, Section, SectionHeader, Tag } from '../components/ui'
import { cx } from '../utils/cx'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/bsc-hero.jpg'
import expInternships from '../assets/figma/exp-internships.jpg'
import expLectures from '../assets/figma/exp-lectures.jpg'
import expVisits from '../assets/figma/exp-visits.jpg'
import expSeminars from '../assets/figma/exp-seminars.jpg'
import expWorkshops from '../assets/figma/exp-workshops.jpg'
import expEvents from '../assets/figma/exp-events.jpg'

const highlights = [
    'University Affiliated Degree', 'Advanced Hospitality Training', 'Industry Internship', 'Professional Workshops',
    'Leadership Development', 'Placement Assistance', 'Entrepreneurship Support'
]

const learningAreas = [
    'Food Production & Culinary Arts', 'Food & Beverage Management', 'Front Office Management',
    'Housekeeping Operations', 'Hospitality Marketing', 'Hotel Finance & Administration',
    'Hospitality Entrepreneurship', 'Event Management', 'Customer Relationship Management'
]

const exposure = [
    { title: 'Hotel Internships', image: expInternships },
    { title: 'Guest Lectures', image: expLectures },
    { title: 'Industrial Visits', image: expVisits },
    { title: 'Hospitality Seminars', image: expSeminars },
    { title: 'Industry Workshops', image: expWorkshops },
    { title: 'Live Event Management', image: expEvents }
]

const careers = [
    'Hotel Manager', 'Restaurant Manager', 'Executive Chef', 'Front Office Manager', 'Food & Beverage Manager',
    'Event Manager', 'Guest Relations Executive', 'Hospitality Consultant', 'Cruise Line Professional',
    'Airline Catering Professional', 'Hospitality Entrepreneur'
]

const higherStudies = [
    'MBA Hospitality Management', 'MBA Tourism Management', 'M.Sc Hotel Management', 'International Hospitality Certifications'
]

const Bsc = () => (
    <>
        <ProgramHero
            image={heroImg}
            title={['B.Sc.', 'Hotel Management']}
            text="Develop advanced hospitality management, culinary, and business skills through a degree program designed for future hospitality professionals."
            info={[
                { label: 'Duration', value: '3 Years' },
                { label: 'Eligibility', value: '12th Pass or Any Degree Holder' },
                { label: 'Affiliated By', value: 'Bharathidasan University, Tiruchirappalli' }
            ]}
        />

        <ProgramOverview text="The B.Sc. Hotel Management & Catering Technology program provides comprehensive education in hospitality operations, hotel administration, food production, customer service, and business management. Students gain practical experience through industry exposure, internships, workshops, and professional training that prepares them for leadership positions in hospitality organisations." />

        <Section beige>
            <SectionHeader gap={20} eyebrow="Why Choose B.Sc." title="Program Highlights" />
            <div className={ui.wrapCenter} style={{ gap: 38 }}>
                {highlights.map((item, i) => <Tag key={item} className={styles.autoTag} {...reveal('zoom-in', i, { step: 80 })}>{item}</Tag>)}
            </div>
        </Section>

        <Section>
            <SectionHeader gap={20} eyebrow="Curriculum" title="Learning Areas" />
            <div className={ui.wrapCenter}>
                {learningAreas.map((item, i) => <Pill key={item} bordered className={ui.fixed3} {...reveal('fade-up', i, { cols: 3 })}>{item}</Pill>)}
            </div>
        </Section>

        <Section beige>
            <SectionHeader gap={20} eyebrow="Real-World Experience" title="Industry Exposure" />
            <div className={ui.grid3}>
                {exposure.map((item, i) => <ImageCard key={item.title} image={item.image} title={item.title} {...reveal('zoom-in', i, { cols: 3 })} />)}
            </div>
        </Section>

        <Section>
            <SectionHeader gap={20} eyebrow="Your Future" title="Career Opportunities" />
            <div className={ui.wrapCenter}>
                {careers.map((career, i) => <Pill key={career} bordered className={ui.fixed3} {...reveal('fade-up', i, { cols: 3 })}>{career}</Pill>)}
            </div>
        </Section>

        <Section beige>
            <SectionHeader gap={20} eyebrow="Further Studies" title="Higher Education Opportunities" />
            <div className={ui.wrapCenter} style={{ gap: 38 }}>
                {higherStudies.map((item, i) => <Tag key={item} className={cx(styles.higherTag)} {...reveal(i % 2 ? 'fade-left' : 'fade-right', i, { cols: 2 })}>{item}</Tag>)}
            </div>
        </Section>

        <CtaBanner />
    </>
)

export default Bsc
