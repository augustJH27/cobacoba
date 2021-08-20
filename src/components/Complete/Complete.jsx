import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, } from '../Services/ServicesElements';
import { BtnWrap } from '../InfoSection/InfoElements';
import { Button } from '../ButtonElements';

const Complete = ({buttonLabel, primary, dark, dark2}) => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Complete your account</ServicesH1>
            <ServicesH2>Add your address, get your free measuring soft tape and measure your profile, easy right?</ServicesH2>
						<br/>
						<BtnWrap>
							<Button to='home' 
							smooth={true} 
							duration={500} 
							spy={true} 
							exact="true" 
							offset={-80} 
							primary={primary ? 1 : 0} 
							dark={dark ? 1 : 0} 
							dark2={dark2 ? 1 : 0}
							>{buttonLabel}
							</Button>
							</BtnWrap>
        </ServicesContainer>
    )
}

export default Complete;