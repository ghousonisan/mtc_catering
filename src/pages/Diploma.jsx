import styles from './styles/program.module.css'
import ui from '../components/styles/ui.module.css'
import CtaBanner from '../components/CtaBanner'
import { ProgramHero, ProgramOverview } from '../components/ProgramSections'
import { ImageCard, InfoCard, Pill, Section, SectionHeader } from '../components/ui'
import { cx } from '../utils/cx'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/diploma-hero.jpg'
import learnFood from '../assets/figma/learn-food.svg'
import learnFnb from '../assets/figma/learn-fnb.svg'
import learnHousekeeping from '../assets/figma/learn-housekeeping.svg'
import learnBakery from '../assets/figma/learn-bakery.svg'
import learnFrontOffice from '../assets/figma/learn-frontoffice.svg'
import learnComm from '../assets/figma/learn-comm.svg'
import trainKitchen from '../assets/figma/train-kitchen.jpg'
import trainBakery from '../assets/figma/train-bakery.jpg'
import trainRestaurant from '../assets/figma/train-restaurant.jpg'
import trainFrontOffice from '../assets/figma/train-frontoffice.jpg'
import trainVisits from '../assets/figma/train-visits.jpg'
import trainIntern from '../assets/figma/train-intern.jpg'

const benefits = [
    { title: 'Industry-Oriented Curriculum', text: 'Learn hospitality practices aligned with current industry standards.' },
    { title: 'Practical Learning', text: 'Hands-on training in kitchens, restaurants, and hospitality labs.' },
    { title: 'Skill Development', text: 'Enhance communication, leadership, and customer service skills.' },
    { title: 'Career-Focused Training', text: 'Develop job-ready skills through practical exposure and internships.' },
    { title: 'Entrepreneurship Opportunities', text: 'Build the knowledge required to start and manage hospitality businesses.' },
    { title: 'Placement Support', text: 'Guidance and assistance for career opportunities in hospitality sectors.' }
]

const learning = [
    { title: 'Food Production', icon: learnFood },
    { title: 'Food & Beverage Service', icon: learnFnb },
    { title: 'Housekeeping Management', icon: learnHousekeeping },
    { title: 'Bakery & Confectionery', icon: learnBakery },
    { title: 'Front Office Operations', icon: learnFrontOffice },
    { title: 'Hospitality Communication', icon: learnComm }
]

const training = [
    { title: 'Training Kitchen', image: trainKitchen },
    { title: 'Bakery Laboratory', image: trainBakery },
    { title: 'Restaurant Service Unit', image: trainRestaurant },
    { title: 'Front Office Training', image: trainFrontOffice },
    { title: 'Industrial Visits', image: trainVisits },
    { title: 'Internship Programs', image: trainIntern }
]

const careers = [
    'Chef', 'Commis Chef', 'Restaurant Supervisor', 'Front Office Executive', 'Housekeeping Supervisor',
    'Catering Coordinator', 'Hospitality Associate', 'Cruise Line Staff', 'Airline Catering Executive', 'Hospitality Entrepreneur'
]

const Diploma = () => (
    <>
        <ProgramHero
            image={heroImg}
            title={['Diploma in', 'Hotel Management']}
            text="Gain practical knowledge and professional skills in hotel operations, food production, hospitality services, and customer management through industry-oriented training."
            info={[
                { label: 'Duration', value: '1 Year / 3 Years' },
                { label: 'Eligibility', value: '10th Pass/Fail, 12th Pass/Fail, Any Diploma/Degree' },
                { label: 'Affiliated By', value: 'Tamil Nadu Industrial School, Chennai' }
            ]}
        />

        <ProgramOverview text="The Diploma in Hotel Management & Catering Technology program is designed to prepare students for careers in the hospitality and tourism industry. The course combines practical training with theoretical knowledge, helping students develop the skills required for hotel operations, food production, guest service, and hospitality management. Students can choose between a 1-year fast-track program or a comprehensive 3-year diploma program based on their career goals and educational background." />

        <Section beige>
            <SectionHeader gap={20} eyebrow="Key Benefits" title="Why Choose This Program" />
            <div className={ui.grid3}>
                {benefits.map((item, i) => <InfoCard key={item.title} title={item.title} text={item.text} {...reveal('fade-up', i, { cols: 3 })} />)}
            </div>
        </Section>

        <Section>
            <SectionHeader gap={20} eyebrow="Curriculum" title="What You Will Learn" />
            <div className={ui.wrapCenter}>
                {learning.map((item, i) => (
                    <Pill
                        {...reveal('zoom-in', i, { cols: 3 })}
                        key={item.title}
                        className={cx(ui.fixed3, styles.learnPill)}
                        icon={<span className={styles.iconCircle}><img src={item.icon} alt="" /></span>}
                    >
                        {item.title}
                    </Pill>
                ))}
            </div>
        </Section>

        <Section beige>
            <SectionHeader gap={20} eyebrow="Hands-on Experience" title="Practical Training" />
            <div className={ui.grid3}>
                {training.map((item, i) => <ImageCard key={item.title} image={item.image} title={item.title} {...reveal('fade-up', i, { cols: 3 })} />)}
            </div>
        </Section>

        <Section>
            <SectionHeader gap={20} eyebrow="Your Future" title="Career Opportunities" />
            <div className={cx(ui.wrapCenter, styles.careerPills)}>
                {careers.map((career, i) => (
                    <Pill key={career} bordered className={ui.fixed2} {...reveal(i % 2 ? 'fade-left' : 'fade-right', i, { cols: 2 })}>{career}</Pill>
                ))}
            </div>
        </Section>

        <CtaBanner />
    </>
)

export default Diploma
