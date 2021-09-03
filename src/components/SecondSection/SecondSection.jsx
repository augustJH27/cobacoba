import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements';
import {Button4} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer if="home">
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>The first Italian on-demand<br/>fashion platform</HeroH1>
                <HeroP>
                Start crafting your style now for free or become a member for just £10 / month
                </HeroP>
                <HeroP>
                14 days free trial
                </HeroP>
                <HeroBtnWrapper>
                    <Button4 to="/modal" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        <Link to='/modal'>
                        REGISTER
                        </Link>
                    </Button4>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection