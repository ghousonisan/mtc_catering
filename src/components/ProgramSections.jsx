import PageHero, { CourseInfoCard } from './PageHero'
import { Button, Section, SectionHeader } from './ui'
import { useApply } from '../context/apply'
import { OVERLAYS } from '../utils/overlays'

import iconArrow from '../assets/figma/arrow-right-white.svg'
import iconDownload from '../assets/figma/download-white.svg'

// Brochure PDFs aren't available yet, so "Download Brochures" opens the enquiry form for now.
export const ProgramHero = ({ image, title, text, info }) => {
    const { openApply } = useApply()

    return (
        <PageHero
            image={image}
            overlay={OVERLAYS.program}
            title={title}
            stacked
            inlineOnMobile
            text={text}
            aside={<CourseInfoCard rows={info} />}
        >
            <Button iconRight={iconArrow} onClick={openApply}>Apply Now</Button>
            <Button variant="outlineWhite" iconLeft={iconDownload} onClick={openApply}>Download Brochures</Button>
        </PageHero>
    )
}

export const ProgramOverview = ({ text }) => (
    <Section>
        <SectionHeader gap={20} eyebrow="About The Course" title="Program Overview" subtitle={text} />
    </Section>
)
