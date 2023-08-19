import './App.css'
import Footer from './components/footer/footer.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Hero from './components/hero/hero.jsx'
import Reach from './components/reach/reach.jsx'
import Contact from './components/contact/contact.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Reach/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
