import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 700px;
    }
    
    @media screen and (max-width: 480px) {
        height: 500px;
    }
`;

export const ServicesContainer1 = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 768px) {
        height: 700px;
    }
    
    @media screen and (max-width: 480px) {
        height: 500px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0px;
    max-height: 100px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    color: #000;
    margin-bottom: 35px;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
        text-align: center;
    }
`;

export const ServicesH11 = styled.h1`
    font-size: 4.5rem;
    text-align: center;
    color: #000;
    margin-bottom: 35px;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
        text-align: center;
    }
`;

export const ServicesH12 = styled.h1`
    font-size: 4.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 35px;

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
        text-align: center;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    color: #000;
    margin-top: 1px;
    font-weight: 300;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        text-align: center;
    }
`;

export const ServicesH3 = styled.h2`
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
    color: #000;
    margin-top: 1px;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        text-align: center;
    }
`;

export const ServicesH31 = styled.h2`
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
    color: #fff;
    margin-top: 1px;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        text-align: center;
    }
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;