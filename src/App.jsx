import './App.css'
import Info from './components/Info'
import HowTo from './components/HowTo'
import Features from './components/Features'
import Header from './components/Header'
import Logos from './components/Logos'
import MainNav from './components/MainNav'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <MainNav />
      <main>
        <Header />
        <Logos />
        <Features />
        <HowTo />
        <Info />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
