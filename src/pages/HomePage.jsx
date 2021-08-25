import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Problem from '../components/Problem/Problem';
import Solution from '../components/Solution/Solution';
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
          <Problem />
          <Solution />
          <Footer />
        </>
    )
}

export default Home;