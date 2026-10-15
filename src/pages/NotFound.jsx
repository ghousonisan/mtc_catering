import { Button, Section, SectionHeader } from '../components/ui'

const NotFound = () => (
    <Section>
        <SectionHeader
            as="h1"
            eyebrow="404"
            title="Page not found"
            subtitle="The page you're looking for doesn't exist or has been moved."
        />
        <Button to="/">Back to Home</Button>
    </Section>
)

export default NotFound
