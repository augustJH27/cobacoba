import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import MainSection from '../components/MainSection/index';
import Complete from '../components/Complete/Complete';
import Upcycle from '../components/Upcycle/Upcycle';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}/>
          <HeroSection />
          <MainSection />
          <Complete />
          <Upcycle />
          <Services />
          <Footer />
        </>
    )
}

export default Home
