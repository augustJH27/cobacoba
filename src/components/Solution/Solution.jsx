import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesContainer, ServicesH11, ServicesH3, } from '../Design/DesignElements';
import { BtnWrap } from '../InfoSection/InfoElements';
import { Button3 } from '../ButtonElements';

const Complete = ({buttonLabel, primary, dark, dark2}) => {
    return (
        <ServicesContainer id='services'>
            <ServicesH11>Solution</ServicesH11>
            <ServicesH3>Freedom of fashion expression</ServicesH3>
						<br />
						<ServicesH3>Tailored clothes to your body</ServicesH3>
						<br />
						<ServicesH3>Design clothes you love</ServicesH3>
						<br />
						<ServicesH3>Upcycle old clothes</ServicesH3>
						<br />
						<ServicesH3>Repeat</ServicesH3>
						<br />
						<BtnWrap>
							<Link 
							to='/register' 
							role='button'>
							<Button3
							smooth={true} 
							behavior={'smooth'}
							duration={500} 
							spy={true} 
							exact="true" 
							offset={-80} 
							primary={primary ? 1 : 0} 
							dark={dark ? 1 : 0} 
							dark2={dark2 ? 1 : 0}
							>{buttonLabel}<span>JOIN US</span>
							</Button3>
							</Link>
							</BtnWrap>
        </ServicesContainer>
    )
}

export default Complete;