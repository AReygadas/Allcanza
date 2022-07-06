import styled from "styled-components";

export const Body = styled.div `
    background-color: #080710;
    height:100vh ;
    padding: 0;
    margin: 0;
    box-sizing: border-box;    
`;

export const Background = styled.div`
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;    
`;

export const Shape = styled.div`
     height: 200px;
     width: 200px;
     position: absolute;
     border-radius: 50%;
     &:first-child{
     background: linear-gradient(
        #1845ad,
        #23a2f6
     );
         left: -60px;
        top: -60px;
     }
     &:last-child{
        background: linear-gradient(
            to right,
            #ff512f,
            #f09819
        );
        right: -30px;
        bottom: -80px;
     }
 `;

 export const Form = styled.div`
    height: 80vh;
    width: 400px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
 `;  

 export const Htres = styled.h1`
    font-size: 32px;
    font-weight: 500;
    line-height: 10px;
    text-align: center;
    margin-bottom:25px ;
 `;


 export const Label = styled.div`
    display: block;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
 `;

export const Input = styled.input`
    text-align: center;
    display: block;
    height: 35px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 5px;
    margin-top: 8px;
    font-size: 2.1vh;
    font-weight: 300;
    color :#e5e5e5;
    &::placeholder{
        color :#e5e5e5;
    }
`;

export const Button = styled.button`
    margin-top: 30px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
`;

export const Social = styled.div` 
   margin-top: 30px;
   display: flex;
    & > div {
       background: red;
       width: 150px;
       border-radius: 3px;
       padding: 5px 10px 10px 5px;
       background-color: rgba(255,255,255,0.27);
       color: #eaf0fb;
       text-align: center;
    }
    & > div:hover {
        background-color: rgba(255,255,255,0.47);
    }
    & > .fb{
        margin-left: 25px;
    }
    & > i{
        margin-right: 4px;
    }
`;

export const LinksTow = styled.h1 `
    margin-top:15px ;    
    font-size:2vh;
    color:#41D9FF;
`;
