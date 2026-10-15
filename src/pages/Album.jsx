import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './styles/media.module.css'
import ui from '../components/styles/ui.module.css'
import { Section } from '../components/ui'
import { ALBUMS } from '../data/media'
import { cx } from '../utils/cx'
import { reveal } from '../utils/reveal'
import NotFound from './NotFound'

import iconClose from '../assets/figma/close.svg'
import iconArrow from '../assets/figma/arrow-right-white.svg'

const Lightbox = ({ images, index, onChange, onClose }) => {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
            if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
        }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [images.length, index, onChange, onClose])

    return (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <img src={images[index]} alt={`Photo ${index + 1} of ${images.length}`} />
            <button className={cx(styles.lightboxBtn, styles.lightboxClose)} onClick={onClose} aria-label="Close">
                <img src={iconClose} alt="" />
            </button>
            {images.length > 1 && (
                <>
                    <button
                        className={cx(styles.lightboxBtn, styles.lightboxPrev)}
                        onClick={() => onChange((index - 1 + images.length) % images.length)}
                        aria-label="Previous photo"
                    >
                        <img src={iconArrow} alt="" />
                    </button>
                    <button
                        className={cx(styles.lightboxBtn, styles.lightboxNext)}
                        onClick={() => onChange((index + 1) % images.length)}
                        aria-label="Next photo"
                    >
                        <img src={iconArrow} alt="" />
                    </button>
                </>
            )}
        </div>
    )
}

const Album = () => {
    const { slug } = useParams()
    const [active, setActive] = useState(null)
    const album = ALBUMS.find((item) => item.slug === slug)

    if (!album) return <NotFound />

    return (
        <Section>
            <Link to="/gallery" className={styles.backLink}>← Back to Gallery</Link>
            <h1 className={styles.albumHeading} data-animate="fade-up">
                {album.title[0]} <span>{album.title[1]}</span>
            </h1>
            <div className={ui.grid3}>
                {album.images.map((image, index) => (
                    <button key={index} className={styles.photo} onClick={() => setActive(index)} aria-label={`Open photo ${index + 1}`} {...reveal('zoom-in', index, { cols: 3 })}>
                        <img src={image} alt="" loading="lazy" />
                    </button>
                ))}
            </div>
            {active !== null && (
                <Lightbox images={album.images} index={active} onChange={setActive} onClose={() => setActive(null)} />
            )}
        </Section>
    )
}

export default Album
