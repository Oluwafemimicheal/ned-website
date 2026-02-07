
import './App.css'
import Chat from './components/ui/Chat'
import Navbar from './components/ui/Navbar'
import Client from './pages/Client'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const App = () => {

  return (
    <>
      <div>
        <Chat />
      </div>
      <Navbar/>
      <Client />
      <Contact />
      <Footer />
    </>
  )
}

export default App
