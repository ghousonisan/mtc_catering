import { useState } from 'react'
import styles from './styles/contact.module.css'
import PageHero from '../components/PageHero'
import { Button, Section } from '../components/ui'
import { CONTACT } from '../data/site'
import { OVERLAYS } from '../utils/overlays'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/contact-hero.jpg'
import iconSend from '../assets/figma/send-icon.svg'

const fields = [
    { name: 'name', label: 'Enter your name*', placeholder: 'Your Name', type: 'text' },
    { name: 'email', label: 'Enter your Email*', placeholder: 'Your Email', type: 'email' },
    { name: 'phone', label: 'Enter your Phone Number*', placeholder: 'Phone Number', type: 'tel' }
]

const Contact = () => {
    // No backend is wired up yet: submitting validates the form and shows a confirmation.
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        e.currentTarget.reset()
    }

    return (
        <>
            <PageHero
                image={heroImg}
                overlay={OVERLAYS.left60}
                title={['Get In', 'Touch']}
                text="We're here to help answer any questions you might have."
                height={550}
            />

            <Section>
                <div className={styles.details}>
                    <div className={styles.detail} {...reveal('fade-up', 0)}>
                        <h2 className={styles.detailTitle}>Address</h2>
                        <p>{CONTACT.address}</p>
                    </div>
                    <div className={styles.detail} {...reveal('fade-up', 1)}>
                        <h2 className={styles.detailTitle}>Phone</h2>
                        <p>
                            {CONTACT.phones.map((phone, i) => (
                                <span key={phone}>
                                    {i > 0 && ' | '}
                                    <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className={styles.detail} {...reveal('fade-up', 2)}>
                        <h2 className={styles.detailTitle}>Email</h2>
                        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </div>
                </div>

                <div className={styles.cards}>
                    <form className={styles.card} onSubmit={handleSubmit} data-animate="fade-right">
                        <h2 className={styles.cardTitle}>Send us a message</h2>
                        {fields.map((field) => (
                            <label key={field.name} className={styles.field}>
                                {field.label}
                                <input className={styles.input} name={field.name} type={field.type} placeholder={field.placeholder} required />
                            </label>
                        ))}
                        <label className={styles.field}>
                            Enter your Message*
                            <textarea className={styles.input} name="message" placeholder="Your Message" required />
                        </label>
                        {sent && <p className={styles.success} role="status">Thank you! We'll get back to you soon.</p>}
                        <Button type="submit" iconLeft={iconSend} className={styles.submit}>Send Message</Button>
                    </form>

                    <div className={styles.card} {...reveal('fade-left', 0, { delay: 150 })}>
                        <h2 className={styles.cardTitle}>Our Location</h2>
                        <iframe
                            className={styles.map}
                            title="Mother Teresa Group of Institutions location"
                            src={`https://www.google.com/maps?q=${CONTACT.mapCoords}&z=16&output=embed`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                        <a className={styles.mapLink} href={CONTACT.mapLink} target="_blank" rel="noreferrer">
                            Open in Google Maps →
                        </a>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Contact
