import styled,{keyframes} from 'styled-components'
 import Layer1 from '../../images/beforeImage.png'
 import Layer2 from '../../images/mascaracircular.png'

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content:center ;   
`;

export const ImgBx = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 100%;
    height: 100%;
    transition: .5s;
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
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
`;

export const H2 = styled.h2`
    position: relative;
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
    opacity: 0;
    visibility: hidden;
    
`;

export const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: .5s;
`;

export const Card = styled.div`
    position: relative;
    width: 320px;
    height: 450px;
    /* background: #2f3544, url(${Layer1}); */
    background-color:#000 ;
    background-image:url(${Layer1}) ;
    background-size:100% ;
    border-radius: 20px;
    overflow: hidden;
    margin: 3%;
    border: 1px solid rgba(50,50,50,0.7);
    &::before{
        content:"";        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;  
        background:url(${Layer2}),linear-gradient(70deg, ${(props) => props.colorA} 30%, ${(props) => props.colorB} 100%); 
        background-size:120% ;        
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
    &:hover ${ImgBx}{
        top: 0%;
        transform: translateY(-25%);
    }
    &:hover ${ContentBx}{
        height: 210px;
    }
    &:hover ${ContentBx} ${Size}{
        opacity: 1;
        visibility: visible;
        transition-delay: .5s;
    }
    &:hover ${Button}{
        opacity: 1;
        transform: translateY(0px);
        transition-delay: .7s;
    }
`;