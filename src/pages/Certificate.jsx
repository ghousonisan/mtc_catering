import styles from './styles/program.module.css'
import ui from '../components/styles/ui.module.css'
import CtaBanner from '../components/CtaBanner'
import { ProgramHero, ProgramOverview } from '../components/ProgramSections'
import { Pill, Section, SectionHeader, Tag } from '../components/ui'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/cert-hero.jpg'

const trainingAreas = [
    'Basic Food Production', 'Bakery & Confectionery', 'Food & Beverage Service', 'Front Office Operations',
    'Housekeeping Management', 'Hospitality Etiquette', 'Customer Service Skills', 'Communication Skills'
]

const benefits = [
    'Short-Term Professional Training', 'Practical Learning Approach', 'Industry-Relevant Skills', 'Affordable Career Pathway',
    'Entrepreneurship Opportunities', 'Placement Guidance', 'Flexible Learning Environment'
]

const careers = [
    'Kitchen Assistant', 'Bakery Assistant', 'Steward', 'Front Office Associate', 'Housekeeping Associate',
    'Hospitality Assistant', 'Catering Assistant', 'Service Associate', 'Food Service Executive'
]

const Certificate = () => (
    <>
        <ProgramHero
            image={heroImg}
            title={['Certificate Course in', 'Hospitality & Catering']}
            text="A practical skill-based program designed for students who wish to gain industry-ready hospitality knowledge and start their careers quickly."
            info={[
                { label: 'Duration', value: '1 Year' },
                { label: 'Eligibility', value: '10th Pass/Fail, 12th Pass, Any Diploma Holder' }
            ]}
        />

        <ProgramOverview text="The Certificate Course provides specialised training in hospitality operations, food production, food service, and customer care. The program focuses on practical learning, allowing students to gain valuable skills and confidence for entry-level roles in the hospitality industry." />

        <Section beige>
            <SectionHeader gap={20} eyebrow="What You Will Learn" title="Training Areas" />
            <div className={ui.wrapCenter} style={{ gap: 38 }}>
                {trainingAreas.map((item, i) => <Tag key={item} className={styles.autoTag} {...reveal('zoom-in', i, { cols: 4 })}>{item}</Tag>)}
            </div>
        </Section>

        <Section>
            <SectionHeader
                gap={20}
                eyebrow="Why Choose This Course"
                title="Program Benefits"
                subtitle="Learn practical hospitality skills quickly and confidently through hands-on training, experienced faculty guidance, and industry-focused learning."
                subtitleClassName={styles.benefitsSubtitle}
            />
            <div className={ui.wrapCenter}>
                {benefits.map((item, i) => <Pill key={item} bordered className={ui.fixed3} {...reveal('fade-up', i, { cols: 3 })}>{item}</Pill>)}
            </div>
        </Section>

        <Section beige>
            <SectionHeader gap={20} eyebrow="Start Working Quickly" title="Career Opportunities" />
            <div className={ui.wrapCenter}>
                {careers.map((career, i) => <Pill key={career} className={ui.fixed3} {...reveal('zoom-in', i, { cols: 3 })}>{career}</Pill>)}
            </div>
        </Section>

        <CtaBanner />
    </>
)

export default Certificate
