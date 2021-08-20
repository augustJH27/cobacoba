import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroBtnWrapper>
                    <div className='button-customer'>
                    <HeroH1>Craft my clothes</HeroH1>
                    <Button to="/signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-80}
                    >Customer
                    {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    </div>
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <div className='button-supplier'>
                    <HeroH1>Reach Customers</HeroH1>
                    <Button to="/signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-80}
                    >Supplier
                    {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    </div>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;