import React from 'react';
import { BtnWrap } from '../InfoSection/InfoElements';
import { Button } from '../ButtonElements';
import { ServicesContainer, ServicesH1, ServicesH2, } from './DesignElements';

const Services = ({buttonLabel, primary, dark, dark2}) => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Design your idea</ServicesH1>
            <ServicesH2>Submit your design and discover: pricing and timing!</ServicesH2>
            <br/>
            <BtnWrap>
            <Button
			smooth={true} 
			duration={500} 
			spy={true} 
			exact="true" 
			offset={-80} 
			primary={primary ? 1 : 0} 
			dark={dark ? 1 : 0} 
			dark2={dark2 ? 1 : 0}
			>{buttonLabel}<span>Design</span>
			</Button>
			</BtnWrap>
        </ServicesContainer>
    )
}

export default Services;