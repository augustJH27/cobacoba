import React from 'react'
import HeroSection from '../components/HeroSection';
import Problem from '../components/Problem/Problem';
import Solution from '../components/Solution/Solution';

function Home() {
    return (
        <>
          <HeroSection />
          <Problem />
          <Solution />
        </>
    )
}

export default Home;