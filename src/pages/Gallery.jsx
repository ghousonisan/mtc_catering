import { Link } from 'react-router-dom'
import styles from './styles/media.module.css'
import PageHero from '../components/PageHero'
import { Section } from '../components/ui'
import { ALBUMS } from '../data/media'
import { OVERLAYS } from '../utils/overlays'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/life-hero.jpg'
import iconImage from '../assets/figma/image-icon-white.svg'

const Gallery = () => (
    <>
        <PageHero
            image={heroImg}
            overlay={OVERLAYS.bottom60}
            title={['Life At Mother Teresa', 'Catering College']}
            stacked
            text="Explore moments of learning, creativity, hospitality training, and student achievement."
        />

        <Section>
            <div className={styles.albums}>
                {ALBUMS.map((album, i) => (
                    <Link key={album.slug} to={`/gallery/${album.slug}`} className={styles.album} {...reveal('zoom-in', i, { cols: 4, step: 120 })}>
                        <img src={album.cover} alt="" loading="lazy" />
                        <span className={styles.albumTitle}>{album.title.join(' ')}</span>
                        <span className={styles.albumCount}>
                            <img src={iconImage} alt="" />
                            {String(album.images.length).padStart(2, '0')}
                        </span>
                    </Link>
                ))}
            </div>
        </Section>
    </>
)

export default Gallery
