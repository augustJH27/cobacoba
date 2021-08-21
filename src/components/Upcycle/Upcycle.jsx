import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, } from '../Design/DesignElements';
import { BtnWrap } from '../InfoSection/InfoElements';
import { Button } from '../ButtonElements';

const Complete = ({buttonLabel, primary, dark, dark2}) => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Upcycle now</ServicesH1>
            <ServicesH2>Bored of your clothes? Don't throw them away, give them to us! Keep fashion circular</ServicesH2>
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
							>{buttonLabel}<span>Upcycle</span>
							</Button>
							</BtnWrap>
        </ServicesContainer>
    )
}

export default Complete;