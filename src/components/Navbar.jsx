import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './styles/navbar.module.css'
import { NAV_LINKS } from '../data/site'
import { useApply } from '../context/apply'
import { cx } from '../utils/cx'

import logo from '../assets/figma/logo.png'
import iconMenu from '../assets/figma/menu.svg'
import iconClose from '../assets/figma/close.svg'
import iconChevron from '../assets/figma/chevron-small.svg'

export const Brand = ({ className, titleClassName, subtitleClassName, logoClassName }) => (
    <Link to="/" className={cx(styles.brand, className)} aria-label="Mother Teresa College of Hotel Management & Catering Technology — Home">
        <span className={cx(styles.brandLogo, logoClassName)}>
            <img src={logo} alt="" />
        </span>
        <span className={styles.brandText}>
            <span className={cx(styles.brandTitle, titleClassName)}>MOTHER TERESA</span>
            <span className={cx(styles.brandSubtitle, subtitleClassName)}>Hotel management & catering technology</span>
        </span>
    </Link>
)

const isGroupActive = (pathname, item) =>
    item.children?.some((child) => pathname.startsWith(child.to))

const Navbar = () => {
    const { pathname } = useLocation()
    const { openApply } = useApply()
    const [menuOpen, setMenuOpen] = useState(false)
    const [expanded, setExpanded] = useState(null)
    const [lastPath, setLastPath] = useState(pathname)

    // Close menus whenever the route changes.
    if (pathname !== lastPath) {
        setLastPath(pathname)
        setMenuOpen(false)
        setExpanded(null)
    }

    // Drop focus from the clicked dropdown link so the :focus-within menu closes.
    useEffect(() => {
        document.activeElement?.blur?.()
    }, [pathname])

    const handleApply = () => {
        setMenuOpen(false)
        openApply()
    }

    const linkClass = ({ isActive }) => cx(styles.navLink, isActive && styles.active)

    return (
        <>
            <header className={styles.header}>
                <Brand />

                <nav className={styles.nav} aria-label="Main">
                    {NAV_LINKS.map((item) => {
                        if (item.children) {
                            return (
                                <div key={item.key} className={styles.navItem}>
                                    <button
                                        className={cx(styles.navLink, isGroupActive(pathname, item) && styles.active)}
                                        aria-haspopup="true"
                                    >
                                        {item.label}
                                    </button>
                                    <div className={styles.dropdown}>
                                        {item.children.map((child) => (
                                            <NavLink
                                                key={child.to}
                                                to={child.to}
                                                className={({ isActive }) => cx(styles.dropdownLink, isActive && styles.dropdownLinkActive)}
                                            >
                                                {child.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        if (!item.to) {
                            return <span key={item.key} className={cx(styles.navLink, styles.static)}>{item.label}</span>
                        }
                        return (
                            <NavLink key={item.key} to={item.to} end={item.to === '/'} className={linkClass}>
                                {item.label}
                            </NavLink>
                        )
                    })}
                    <button className={styles.applyBtn} onClick={openApply}>Apply Now</button>
                </nav>

                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <img src={menuOpen ? iconClose : iconMenu} alt="" />
                </button>
            </header>

            <nav className={cx(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)} aria-label="Mobile">
                {NAV_LINKS.map((item) => {
                    if (item.children) {
                        const open = expanded === item.key
                        return (
                            <div key={item.key}>
                                <button
                                    className={cx(styles.mobileLink, isGroupActive(pathname, item) && styles.mobileLinkActive)}
                                    onClick={() => setExpanded(open ? null : item.key)}
                                    aria-expanded={open}
                                >
                                    {item.label}
                                    <img src={iconChevron} alt="" className={cx(styles.chevron, open && styles.chevronOpen)} />
                                </button>
                                {open && (
                                    <div className={styles.mobileSub}>
                                        {item.children.map((child) => (
                                            <NavLink
                                                key={child.to}
                                                to={child.to}
                                                className={({ isActive }) => cx(styles.mobileLink, isActive && styles.mobileLinkActive)}
                                            >
                                                {child.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    }
                    if (!item.to) {
                        return <span key={item.key} className={styles.mobileLink}>{item.label}</span>
                    }
                    return (
                        <NavLink
                            key={item.key}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) => cx(styles.mobileLink, isActive && styles.mobileLinkActive)}
                        >
                            {item.label}
                        </NavLink>
                    )
                })}
                <button className={styles.mobileApply} onClick={handleApply}>Apply Now</button>
            </nav>
        </>
    )
}

export default Navbar
