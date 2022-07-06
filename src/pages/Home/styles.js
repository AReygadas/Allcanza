import styled, {keyframes, createGlobalStyle } from 'styled-components'
import IMG01 from '../../images/fondoL.png'
import IMG02 from '../../images/fondoD.png'
import IMG03 from '../../images/fondoD2.png'
import IMG04 from '../../images/76256.jpg'
import Images from '../../images/fondoD.png'

export const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${Images});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
    }
  `;

export const FondoHead = styled.div`    
    width:98.7vw ;
    height:auto ;  
`;

export const Persons = styled.img`    
    width:98.7vw ;
    height:auto ;
    transition-duration: 0.5s;
    &:hover{
        transform:scale(1.4) ;
    }
`;

export const Title = styled.h1`
    color:#ff5733;
    font-size: 5.2vw;
    font-weight:750 ;
    cursor:pointer ;
    transition-duration: 0.5s;
    &:hover{
        background: url(${IMG04});
        background-size:400px ;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 5.5rem;
    }
`;

export const SubTitle = styled.h1`
     color:#ffc306;
     margin-top:-15px ;
     font-size: 3vw;
     font-weight:750 ;
     transition-duration: 0.5s;
     &:hover{
        font-size: 3.2rem;
        background: url(${IMG04});
        background-size:400px ;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }        
`;

export const Parrafo = styled.p`
    margin: 15px;
    color:#fff;
    font-size:1.5vw ;
`;

export const Divicion = styled.div`
    height:0.5rem ;
    width: 15% ;
    border-radius:15px ;
    background-color:#ff5733 ;
    margin-bottom: 15px ;
`;

export const ButtonLink = styled.button`
    background-color:#3dc5e8 ;
    color:#fff ;
    border-radius:12px ;
    padding:10px 25px 10px 25px ;
    border:none ;
    font-size:0.9rem ;
    cursor: pointer;
    transition-duration: 0.5s;
`;

export const ComponentesAdd =styled.div`
    position:absolute;
    z-index:100;
    margin-top:-50% ;
    margin-left: 60vw ;  
`;

export const SectionA = styled.section`    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    height: auto ;
    padding: 3% ;
 
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
     }
`;










