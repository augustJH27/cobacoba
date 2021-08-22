import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesContainer } from '../Design/DesignElements';
import { BtnWrap } from '../InfoSection/InfoElements';
import { Button3 } from '../ButtonElements';

const Repeat = ({buttonLabel, primary, dark, dark2}) => {
    return (
        <ServicesContainer id='services'>
						<BtnWrap>
							<Link 
							to='/' 
							role='button'>
							<Button3
							smooth={true} 
							duration={500} 
							spy={true} 
							exact="true" 
							offset={-80} 
							primary={primary ? 1 : 0} 
							dark={dark ? 1 : 0} 
							dark2={dark2 ? 1 : 0}
							>{buttonLabel}<span>REPEAT</span>
							</Button3>
							</Link>
							</BtnWrap>
        </ServicesContainer>
    )
}

export default Repeat;