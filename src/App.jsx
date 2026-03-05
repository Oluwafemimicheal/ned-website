
import { useState } from 'react'
import './App.css'
import Chat from './components/ui/Chat'
import Navbar from './components/ui/Navbar'
import PropertyDetails from './components/ui/PropertyDetails'
import Client from './pages/Client'
import Contact from './pages/Contact'
import FeaturedProject from './pages/FeaturedProject'
import Footer from './pages/Footer'
import Hero from './pages/Hero'

const App = () => {
  const [showProductDetails, setShowProductDetails] = useState(false)
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Chat />
      </div>
      <div className=''>
        <Navbar />
      </div>
      <Hero />
      <PropertyDetails show={showProductDetails} showAction={setShowProductDetails} />
      <FeaturedProject show={setShowProductDetails} />
      <Client />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
