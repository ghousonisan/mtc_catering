import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Diploma from './pages/Diploma'
import Bsc from './pages/Bsc'
import Certificate from './pages/Certificate'
import Facilities from './pages/Facilities'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Album from './pages/Album'
import Contact from './pages/Contact'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics/diploma" element={<Diploma />} />
        <Route path="/academics/bsc" element={<Bsc />} />
        <Route path="/academics/certificate" element={<Certificate />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<Album />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<LegalPage page="terms" />} />
        <Route path="/privacy" element={<LegalPage page="privacy" />} />
        <Route path="/refund-policy" element={<LegalPage page="refund" />} />
        <Route path="/cancellation-policy" element={<LegalPage page="cancellation" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
