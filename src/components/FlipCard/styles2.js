import styled,{keyframes, createGlobalStyle } from 'styled-components'
import Layer1 from '../../images/beforeImage.png'
import Layer2 from '../../images/mascaracircular.png'
import Layer3 from '../../images/beforeImageback.png'
import GothamUltra from '../../fonts/FontsFree-Net-Gotham-UltraItalic.woff';




export const Card = styled.div`
 @font-face {
         font-family: 'MyFont';
        src: local('MyFont'), url(${GothamUltra}) format('woff');
    }
    width: 320px;
    height: 450px;
    position: relative;    
    display: flex;
    justify-content:center;
    border-radius: 20px;
    margin: 3%;
    border: 1px solid rgba(50,50,50,0.7);
    -webkit-transition: 1.5s ease-in-out;
	transition: 2s ease-in-out;
	transform-style: preserve-3d;
     &:hover{
        transform: rotateY(180deg);
	    -webkit-transform: rotateY(180deg);
    } 
 `;
 

 export const ImgBx = styled.div`
 position: absolute;
 top: 50%;
 transform: translateY(-70%);
 z-index: 1000;
 width: 100%;
 height: 100%;
 transition: 2.0s;
`;

export const Img = styled.img`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) ;
 width: 270px;
 width: 80%;
`;

export const  ContentBx = styled.div`
    position: absolute;
    margin-top: 80% ;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
`;

export const H2 = styled.h2`
    position: relative;

    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
`;

export const Size=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: .5s;
    opacity: 1;
    visibility: visible;
 
`;

export const Button = styled.button`
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    margin-left: 20px ;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 1;
    //transform: translateY(50px);
    transition: .5s;
    &:hover{
        transform:scale(1.3) ;
        border:solid 1px rgba(20,60,120,1) ;
    }
`;

export const Cost = styled.span`
    position: relative;
    color:#30FF02;
    font-style:oblique ;
    font-size:3rem ;
    font-weight:800 ;
`;
export const Decimal = styled.span`
    position: relative;
    color:#30FF02;
    font-style:oblique ;
    font-size:1.5rem ;
    font-weight:800 ;
`;

export const Contenido = styled.div`
   
    position: relative;
    width:100% ;
    font-family:MyFont ;
    height:100% ;
    transform: translatez(170px) scale(0.8);
	line-height: 1.5em;
    border-radius:20px ; 
`;

export const Front = styled.div`
    position: relative;    
    z-index: 2;
    background-color:#000 ;
    background-image:url(${Layer3}) ;
    background-size:100% ;
    width:100% ;
    height:100% ;
    padding: 3%;
     transform-style: preserve-3d;
    -webkit-backface-visibility: hidden; /* Safari */
     backface-visibility: hidden;
	 border-radius: 20px;

     &::before{
        content:"";
        position: absolute;
        z-index:5 ;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: circle(150px at 80% 20%);
        transition: 1s ease-in-out;
        background:url(${Layer2}),linear-gradient(70deg, ${(props) => props.colorA} 30%, ${(props) => props.colorB} 100%);
        background-size:120% ;
        border-radius:20px ;
     }
    &:hover:before {
        clip-path: circle(300px at 80% -20%);
    }
    &:after {
        content: "";
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 12em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 255, 0.04);
    }
    /* &:hover ${ImgBx}{
        top: 0%;
        transform: translateY(-60%);

    } */
    &:hover ${ContentBx}{
        height: 210px;
        
    }
    &:hover ${ContentBx} ${Size}{
        opacity: 1;
        visibility: visible;
     
    }
    /* &:hover ${Button}{
        opacity: 1;
        transform: translateY(0px);
        transition-delay: .7s;
    } */

`;

export const Back = styled.div`
    position: absolute;
	transform: rotateY(180deg);
	z-index: 0;
    background-color:#000 ;
    background-image:url(${Layer3}) ;
    background-size:100% ;
    width:100% ;
    height:100% ;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden; /* Safari */
     backface-visibility: hidden;
	 border-radius: 20px;

`;

