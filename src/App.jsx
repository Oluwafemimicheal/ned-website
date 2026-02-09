
import './App.css'
import Chat from './components/ui/Chat'
import Navbar from './components/ui/Navbar'
import Client from './pages/Client'
import Contact from './pages/Contact'
import FeaturedProject from './pages/FeaturedProject'
import Footer from './pages/Footer'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <div>
        <Chat />
      </div>
      <Navbar/>
      <FeaturedProject />
      <Client />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
