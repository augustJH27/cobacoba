import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesContainer, ServicesH1, ServicesH2, } from '../Design/DesignElements';
import { BtnWrap } from '../InfoSection/InfoElements';
import { Button3 } from '../ButtonElements';

const Complete = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>The first Italian on-demand<br/>fashion platform</ServicesH1>
            <ServicesH2>Start crafting your style now for free</ServicesH2>
						<br/>
						<BtnWrap>
							<Link 
							to='/modal' 
							role='button'>
							<Button3>REGISTER</Button3>
							</Link>
							</BtnWrap>
        </ServicesContainer>
    )
}

export default Complete;