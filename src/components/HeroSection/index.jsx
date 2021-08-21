import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Video from '../../videos/video.mp4';
import { Button1, Button2 } from '../ButtonElements';
import { HeroContainer, HeroContent, HeroH1, HeroBtnWrapper, HeroBtnWrapper1, HeroH2} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <HeroBtnWrapper1>
                    <Link 
                    to='/customer-page'
                    role='button'>
                    <div className='button-customer'>
                    <HeroH2>Craft my clothes</HeroH2>
                    <Button2 
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
                    </Button2>
                    </div>
                    </Link>
                </HeroBtnWrapper1>
                <HeroBtnWrapper>
                    <Link
                    to='/supplier-page'
                    role='button'>
                    <div className='button-supplier'>
                    <HeroH1>Reach Customers</HeroH1>
                    <Button1
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
                    </Button1>
                    </div>
                    </Link>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;