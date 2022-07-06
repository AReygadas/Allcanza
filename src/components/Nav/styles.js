import styled,{keyframes} from 'styled-components'
import banner from '../../images/FondoMnu.png'

export const Logo = styled.img`
    height:3rem ;
    margin:2rem;
    
`;

export const MenuDesplegable = styled.div`
    position: absolute ;
    width:100vw ;
    display:block ;
    height:20vh ;
    background:url(${banner});
    background-size: 100% ;
    border-radius:0px 0px 15px 15px ;
    transition: visibility 3s linear;
    z-index:200 ;
    
`;

export const LoginBtn = styled.button`
    background:#E95247 ;
    color: white;
    margin: 30px 5px 20px 15px;
    padding: 5px 25px 5px 25px ;
    border:none ;
    border-radius: 12px;
    font-size: 1.2rem ;

`;

export const Theme = styled.div`
    position: absolute;    
    right: 27px;

`;



