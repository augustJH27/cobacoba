import React from 'react';
import {Link} from 'react-router-dom';
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements';
import {Button3} from '../ButtonElements';

const HeroSection = () => {
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }
    return (
        <HeroContainer if="home">
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>The first Italian on-demand<br/>fashion platform</HeroH1>
                <HeroP>
                Start crafting your style now for free
                </HeroP>
                <HeroBtnWrapper>
                <Link to='/modal'>
                    <Button3 to="/modal" 
                    // onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                    >   
                        REGISTER   
                    </Button3>
                    </Link>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection