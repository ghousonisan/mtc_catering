import albumPongal from '../assets/figma/album-pongal.jpg'
import albumVisit from '../assets/figma/album-visit.jpg'
import albumDubai from '../assets/figma/album-dubai.jpg'
import pongal1 from '../assets/figma/pongal-1.jpg'
import pongal2 from '../assets/figma/pongal-2.jpg'
import pongal3 from '../assets/figma/pongal-3.jpg'
import pongal4 from '../assets/figma/pongal-4.jpg'
import pongal5 from '../assets/figma/pongal-5.jpg'
import pongal6 from '../assets/figma/pongal-6.jpg'
import pongal7 from '../assets/figma/pongal-7.jpg'
import pongal8 from '../assets/figma/pongal-8.jpg'
import pongal9 from '../assets/figma/pongal-9.jpg'
import pongal10 from '../assets/figma/pongal-10.jpg'
import pongal11 from '../assets/figma/pongal-11.jpg'
import pongal12 from '../assets/figma/pongal-12.jpg'
import visit1 from '../assets/figma/visit-1.jpg'
import visit2 from '../assets/figma/visit-2.jpg'
import visit3 from '../assets/figma/visit-3.jpg'
import visit4 from '../assets/figma/visit-4.jpg'
import dubai1 from '../assets/figma/dubai-1.jpg'
import dubai2 from '../assets/figma/dubai-2.jpg'

import evChinese from '../assets/figma/ev-chinese.jpg'
import evGreetings from '../assets/figma/ev-greetings.jpg'
import evWorkshop from '../assets/figma/ev-workshop.jpg'
import evPongal from '../assets/figma/ev-pongal.jpg'

// Album titles are split so the last part can be highlighted in gold.
export const ALBUMS = [
    {
        slug: 'pongal-celebration-2026',
        title: ['Pongal Celebration', '2026'],
        cover: albumPongal,
        images: [pongal1, pongal2, pongal3, pongal4, pongal5, pongal6, pongal7, pongal8, pongal9, pongal10, pongal11, pongal12]
    },
    {
        slug: 'practical-visit-dr-c-vijayabaskar',
        title: ['Practical Visit former minister', 'Dr. C.Vijayabaskar MLA'],
        cover: albumVisit,
        images: [visit1, visit2, visit3, visit4]
    },
    {
        slug: 'professional-journey-dubai',
        title: ['Started Professional Journey in', 'Dubai'],
        cover: albumDubai,
        images: [dubai1, dubai2]
    }
]

export const EVENTS = [
    {
        type: 'Events',
        date: '11.02.2026',
        title: 'Chinese Cuisine Practical',
        image: evChinese,
        paragraphs: [
            'Today, in the practical session, our students of the Hotel Management prepared German and Russian Cuisine Practical.',
            'On this occasion, many of the dignitaries visited and tasted the cuisine as the guests, especially the Principal of Mother Teresa College of Nursing, the vice principal and the staff members of Nursing, who were welcomed warmly by the Mother Teresa College of Hotel Management.',
            'The guests congratulated and encouraged the hospitality of the college. Using the great infrastructure and sustenance, the Principal of Hotel Management thanked the correspondent and appreciated the students and the staff in his eulogy.'
        ]
    },
    {
        type: 'News',
        date: '24.01.2026',
        title: 'Greetings',
        image: evGreetings,
        paragraphs: [
            '"Tabula Rasa"',
            'In our college restaurant with the new setting, the students commenced the new production and service practical classes today.',
            'Our college warmly welcomed the officials of the Mechanical department’s Professors in Mother Teresa College of Engineering, who visited and tasted the specialized South Indian food.',
            'This event granted great contentment to the Mother Teresa College of Hotel Management and Catering Science’s Principal, Staff, Officials and the students. The college conveys its gratitude to the Correspondent and the Management for arranging the infrastructure.',
            'Thank you.'
        ]
    },
    {
        type: 'Events',
        date: '14.01.2026',
        title: 'Workshop on South Indian Food',
        image: evWorkshop,
        paragraphs: [
            'Our College of Hotel Management and Catering Technology conducted a practical session preparing delicious biryani under the guidance of the Principal and Chef.',
            'The preparation was displayed in front of our former Minister Dr. C. Vijayabaskar, Viralimalai constituency, who tasted and appreciated the students; our correspondent who encouraged the students; the registrar who patronised; the principal who coordinated the practical; the chef who led the practical; and the staff who cooperated wholeheartedly. The college thanks everyone who supported the successful program.'
        ]
    },
    {
        type: 'Events',
        date: '10.01.2026',
        title: 'Pongal Celebrations 2026',
        image: evPongal,
        lang: 'ta',
        paragraphs: [
            'அன்புடையீர், வணக்கம்.',
            'நமது மதர்தெரசா கல்வி நிறுவனங்களில் கிராமிய பொங்கல் மற்றும் பாரம்பரிய விளையாட்டு திருவிழா 10.01.2026 சனிக்கிழமை காலை 8.00 மணி முதல் நடைபெறவுள்ளது.',
            'அவ்வமயம் தாங்கள் விழாவில் கலந்துகொண்டு சிறப்பிக்க வேண்டுகின்றோம்',
            'விவசாய பெருமக்கள், பெற்றோர்கள், பொதுமக்கள், அனைவரையும் அன்புடன் வருக! வருக! என வரவேற்கிறோம்.',
            'அன்புடன் அழைப்பது...',
            'நிறுவனர், தாளாளர், முதல்வர்கள், பேராசிரியர்கள், அலுவலகப் பணியாளர்கள்',
            'மற்றும் மாணவ - மாணவிகள்'
        ]
    }
]
