import ui from '../components/styles/ui.module.css'
import PageHero from '../components/PageHero'
import { ImageCard, Section } from '../components/ui'
import { OVERLAYS } from '../utils/overlays'
import { reveal } from '../utils/reveal'

import heroImg from '../assets/figma/fac-hero.jpg'
import facKitchen from '../assets/figma/fac-kitchen.jpg'
import facBakery from '../assets/figma/fac-bakery.jpg'
import facRestaurant from '../assets/figma/fac-restaurant.jpg'
import facFrontOffice from '../assets/figma/fac-frontoffice.jpg'
import facHousekeeping from '../assets/figma/fac-housekeeping.jpg'
import facComputer from '../assets/figma/fac-computer.jpg'
import facLibrary from '../assets/figma/fac-library.jpg'
import facTransport from '../assets/figma/fac-transport.jpg'
import facHostel from '../assets/figma/fac-hostel.jpg'
import facCafeteria from '../assets/figma/fac-cafeteria.jpg'

const facilities = [
    { title: 'Training Kitchen', image: facKitchen, text: 'Hands-on culinary training using professional equipment and industry-standard practices.' },
    { title: 'Bakery & Confectionery Lab', image: facBakery, text: 'Specialized training in baking, pastry arts, desserts, and confectionery production.' },
    { title: 'Restaurant Training Unit', image: facRestaurant, text: 'Practical exposure to restaurant operations and guest service excellence.' },
    { title: 'Front Office Lab', image: facFrontOffice, text: 'Training in guest relations, reservations, and hospitality operations.' },
    { title: 'Housekeeping Lab', image: facHousekeeping, text: 'Learning housekeeping management and hospitality standards.' },
    { title: 'Computer Lab', image: facComputer, text: 'Digital learning and hospitality software training.' },
    { title: 'Library', image: facLibrary, text: 'Extensive collection of books, journals, and digital resources in a quiet reading environment.' },
    { title: 'Transportation', image: facTransport, text: 'Fleet of safe, GPS-enabled buses covering major routes with trained staff.' },
    { title: 'Hostel', image: facHostel, text: 'Comfortable, secure residential facilities with nutritious food and supervised study hours.' },
    { title: 'Cafeteria', image: facCafeteria, text: 'Hygienic cafeteria serving nutritious and delicious meals and snacks.' }
]

const Facilities = () => (
    <>
        <PageHero
            image={heroImg}
            overlay={OVERLAYS.bottom50}
            title={['World-Class Training', 'Facilities']}
            stacked
            text="Experience hands-on learning in our state-of-the-art labs and training centers."
        />

        <Section>
            <div className={ui.grid3}>
                {facilities.map((item, i) => (
                    <ImageCard
                        {...reveal('fade-up', i, { cols: 3 })}
                        key={item.title}
                        image={item.image}
                        title={item.title}
                        text={item.text}
                        height={300}
                        fadeFrom="50%"
                        fadeTo="80%"
                    />
                ))}
            </div>
        </Section>
    </>
)

export default Facilities
