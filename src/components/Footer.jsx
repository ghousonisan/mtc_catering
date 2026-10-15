import { Link } from 'react-router-dom'
import styles from './styles/footer.module.css'
import { Brand } from './Navbar'
import { useApply } from '../context/apply'

import iconInstagram from '../assets/figma/soc-instagram.svg'
import iconFacebook from '../assets/figma/soc-facebook.svg'
import iconLinkedin from '../assets/figma/soc-linkedin.svg'
import iconWhatsapp from '../assets/figma/soc-whatsapp.svg'
import iconYoutube from '../assets/figma/soc-youtube.svg'

// Social profile URLs aren't in the design yet — replace the '#' hrefs once available.
const socials = [
    { label: 'Instagram', icon: iconInstagram, href: '#' },
    { label: 'Facebook', icon: iconFacebook, href: '#' },
    { label: 'LinkedIn', icon: iconLinkedin, href: '#' },
    { label: 'WhatsApp', icon: iconWhatsapp, href: 'https://wa.me/919942988522', className: styles.whatsapp },
    { label: 'YouTube', icon: iconYoutube, href: '#' }
]

const legalLinks = [
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Return & Refund Policy', to: '/refund-policy' },
    { label: 'Cancellation Policy', to: '/cancellation-policy' }
]

const Footer = () => {
    const { openApply } = useApply()

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.about} data-animate="fade-right">
                    <Brand
                        className={styles.brand}
                        logoClassName={styles.brandLogo}
                        titleClassName={styles.brandTitle}
                        subtitleClassName={styles.brandSubtitle}
                    />
                    <p className={styles.tagline}>
                        Empowering students through quality education, practical learning and innovation.
                    </p>
                </div>

                <div className={styles.links} data-animate="fade-left">
                    <div className={styles.quick}>
                        <div className={styles.column}>
                            <p className={styles.columnTitle}>Quick Links</p>
                            <Link to="/" className={styles.link}>Home</Link>
                            <Link to="/about" className={styles.link}>About Us</Link>
                            <button className={styles.link} onClick={openApply}>Admissions</button>
                            <Link to="/#programs" className={styles.link}>Academics</Link>
                        </div>
                        <div className={styles.column}>
                            <Link to="/facilities" className={styles.link}>Facilities</Link>
                            <Link to="/#campus" className={styles.link}>Campus Life</Link>
                            <Link to="/gallery" className={styles.link}>Gallery</Link>
                            <Link to="/contact" className={styles.link}>Contact Us</Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.columnTitle}>Legal</p>
                        {legalLinks.map((link) => (
                            <Link key={link.to} to={link.to} className={styles.link}>{link.label}</Link>
                        ))}
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom} data-animate="fade-up">
                    <p className={styles.copyright}>
                        © 2026 Mother Teresa College of Hotel Management & Catering Technology | All rights reserved.
                        <br />
                        Designed & Developed by Ciphermutex Pvt. Ltd
                    </p>
                    <div className={styles.socials}>
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className={styles.social}
                                aria-label={social.label}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                            >
                                <img src={social.icon} alt="" className={social.className} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
