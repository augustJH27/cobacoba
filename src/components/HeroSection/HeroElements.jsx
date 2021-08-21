import styled from 'styled-components';
import ImgBg from '../../assets/bg.jpg'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
    background-position: center;
    background-size: cover;
    height: calc(100vh - 80px);
    margin-top: -60px;
    padding-top: 60px;
    
`;


export const HeroContent = styled.div`
    height: 100%;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;

export const HeroH2 = styled.h1`
    color: #000;
    font-size: 40px;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const HeroBtnWrapper1 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;