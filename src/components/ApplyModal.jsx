import { useEffect, useRef, useState } from 'react'
import styles from './styles/applyModal.module.css'
import { PROGRAM_OPTIONS } from '../data/site'
import { cx } from '../utils/cx'
import iconClose from '../assets/figma/close.svg'

// No backend is wired up yet: submitting validates the form and shows a confirmation.
const ApplyModal = ({ onClose }) => {
    const [degree, setDegree] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const firstFieldRef = useRef(null)

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose()
        document.addEventListener('keydown', onKey)
        const { overflow } = document.body.style
        document.body.style.overflow = 'hidden'
        firstFieldRef.current?.focus()
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = overflow
        }
    }, [onClose])

    const programs = PROGRAM_OPTIONS.find((option) => option.degree === degree)?.programs ?? []

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className={styles.backdrop} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
            <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="apply-title">
                <button className={styles.close} onClick={onClose} aria-label="Close">
                    <img src={iconClose} alt="" />
                </button>

                <div className={styles.heading}>
                    <h2 id="apply-title" className={styles.title}>Admissions Open 2026</h2>
                    <p className={styles.subtitle}>HMCT Applications - 2026</p>
                </div>

                {submitted ? (
                    <p className={styles.success}>
                        Thank you for your interest! Our admissions team will contact you shortly.
                    </p>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input ref={firstFieldRef} className={styles.field} name="name" placeholder="Enter your name *" required aria-label="Name" />
                        <input className={styles.field} type="email" name="email" placeholder="Enter your Email address *" required aria-label="Email address" />
                        <div className={cx(styles.row, styles.keep)}>
                            <select className={cx(styles.field, styles.code)} name="countryCode" aria-label="Country code" defaultValue="+91">
                                <option value="+91">+91</option>
                                <option value="+971">+971</option>
                                <option value="+65">+65</option>
                            </select>
                            <input className={styles.field} type="tel" name="mobile" placeholder="Enter your Mobile number *" required pattern="[0-9 ]{10,14}" aria-label="Mobile number" />
                        </div>
                        <div className={styles.row}>
                            <input className={styles.field} name="state" placeholder="Enter your State *" required aria-label="State" />
                            <input className={styles.field} name="city" placeholder="Enter your City *" required aria-label="City" />
                        </div>
                        <div className={styles.row}>
                            <select className={styles.field} name="degree" required value={degree} onChange={(e) => setDegree(e.target.value)} aria-label="Degree">
                                <option value="" disabled>Select Degree *</option>
                                {PROGRAM_OPTIONS.map((option) => (
                                    <option key={option.degree} value={option.degree}>{option.degree}</option>
                                ))}
                            </select>
                            <select className={styles.field} name="program" required defaultValue="" key={degree} aria-label="Program">
                                <option value="" disabled>Select Program *</option>
                                {programs.map((program) => (
                                    <option key={program} value={program}>{program}</option>
                                ))}
                            </select>
                        </div>
                        <label className={styles.consent}>
                            <input type="checkbox" name="consent" required />
                            <span>
                                I authorize Mother Teresa College of Hotel Management & Catering Technology and its representatives to contact me regarding updates and notifications through Email, SMS, WhatsApp, and Calls. This consent overrides any DND/NDNC registration. *
                            </span>
                        </label>
                        <button type="submit" className={styles.submit}>Enquire Now</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ApplyModal
