import { useCallback, useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ApplyModal from './ApplyModal'
import { ApplyContext } from '../context/apply'
import { useReveal } from '../hooks/useReveal'

// Scroll to the top on page change, or to the #hash target when one is given.
const useScrollManager = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.slice(1))
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
                return
            }
        }
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname, hash])
}

const Layout = () => {
    const [applyOpen, setApplyOpen] = useState(false)
    const openApply = useCallback(() => setApplyOpen(true), [])
    const closeApply = useCallback(() => setApplyOpen(false), [])
    const contextValue = useMemo(() => ({ openApply }), [openApply])

    useScrollManager()
    useReveal()

    return (
        <ApplyContext.Provider value={contextValue}>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            {applyOpen && <ApplyModal onClose={closeApply} />}
        </ApplyContext.Provider>
    )
}

export default Layout
