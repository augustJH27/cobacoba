import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled.div`
    border-radius: 0px;
    width: 10rem;
    height: 4rem;

    background: ${({ primary }) => (primary ? '#000' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 36px' : '12px 30px')};
    color : ${({ dark }) => (dark ? '#fff' : '#000')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 2px #000 solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition : all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#92a89f' : '#dae0e0')};
    }
`;

export const Button1 = styled(Link)`
    border-radius: 0px;
    width: 10rem;
    height: 3rem;
    background: ${({ primary }) => (primary ? '#000' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 36px' : '12px 30px')};
    color : ${({ dark }) => (dark ? '#fff' : '#000')};
    font-size: ${({ fontBig }) => (fontBig ? '28px' : '28px')};
    outline: none;
    border: 3px #fff solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition : all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#92a89f' : '#dae0e0')};
    }
`;

export const Button2 = styled(Link)`
    border-radius: 0px;
    width: 10rem;
    height: 3rem;
    background: ${({ primary }) => (primary ? '#fff' : '#000')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 36px' : '12px 30px')};
    color : ${({ dark }) => (dark ? '#000' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '28px' : '28px')};
    outline: none;
    border: 3px #000 solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition : all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#323636' : '#92a89f')};
    }
`;

export const Button3 = styled.div`
    border-radius: 0px;
    width: 12rem;
    height: 4rem;

    background: ${({ primary }) => (primary ? '#000' : '#fff')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 36px' : '12px 30px')};
    color : ${({ dark }) => (dark ? '#fff' : '#000')};
    font-size: ${({ fontBig }) => (fontBig ? '34px' : '22px')};
    font-weight: 700;
    outline: none;
    border: 4px #000 solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
`;

export const Button4 = styled.div`
    border-radius: 0px;
    width: 10rem;
    height: 4rem;

    background: ${({ primary }) => (primary ? '#fff' : '#000')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 36px' : '12px 30px')};
    color : ${({ dark }) => (dark ? '#000' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: 2px solid #000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: outline .1s linear;

    &:hover {
        transition : all 0.2s ease-in-out;
    }

`;