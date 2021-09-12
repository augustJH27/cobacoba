import React from 'react';
import { Button } from '../globalStyles';
import { GiCrystalBars, GiRock } from 'react-icons/gi';
import { FaRecycle } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import SearchBar from 'material-ui-search-bar';
import BookData from '../../helpers/Data.json';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
	PricingParagraph,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from '../PricingElements';

function WelcomePage() {
	return (
			<IconContext.Provider value={{ color: '#000', size: 72}}>
				<PricingSection>
					<PricingWrapper>
						<PricingHeading>What to craft today, username?</PricingHeading>
						<SearchBar
						data={BookData}
						placeholder='Start typing your search'
						onChange={() => console.log('onChange')}
						onRequestSearch={() => console.log('onRequestSearch')}
						style={{
							margin: '0 auto',
							width: 300,
							maxWidth: 800}}/>
						<PricingParagraph>Or choose your option below...</PricingParagraph>
						<PricingContainer>
							<PricingCard to='/production'>
								<PricingCardInfo>
									<PricingCardIcon>
										<GiRock />
									</PricingCardIcon>
									<PricingCardPlan>Production</PricingCardPlan>
									{/* <PricingCardCost>$99.99</PricingCardCost>
									<PricingCardLength>per month</PricingCardLength> */}
									<PricingCardFeatures>
										<PricingCardFeature>100 New Users</PricingCardFeature>
									</PricingCardFeatures>
									<Button primary>Start Now</Button>
								</PricingCardInfo>
							</PricingCard>
							<PricingCard to='/design'>
								<PricingCardInfo>
									<PricingCardIcon>
										<GiCrystalBars />
									</PricingCardIcon>
									<PricingCardPlan>Design</PricingCardPlan>
									{/* <PricingCardCost>$299.99</PricingCardCost>
									<PricingCardLength>per month</PricingCardLength> */}
									<PricingCardFeatures>
										<PricingCardFeature>1000 New Users</PricingCardFeature>
									</PricingCardFeatures>
									<Button primary>Start Now</Button>
								</PricingCardInfo>
							</PricingCard>
							<PricingCard to='/upcycle'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaRecycle />
                </PricingCardIcon>
                <PricingCardPlan>Upcycle</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Start Now</Button>
              </PricingCardInfo>
            </PricingCard>
						</PricingContainer>
					</PricingWrapper>
				</PricingSection>
			</IconContext.Provider>
	);
};

export default WelcomePage;