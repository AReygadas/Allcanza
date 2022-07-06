import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { Logo,  MenuDesplegable, LoginBtn,Theme  } from "./styles";
import Log from '../../images/logo.png'
import './hamburgers.css'
import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';

export const Navbar = () => {
  
  const [A, setA]=useState(false);
  
  return (
    <>
      <div style={{background:'#000'}}>      
        <Logo src={Log} alt="Logo" />    
        <div className="hamburger hamburger--stand" onClick={()=> setA(!A) }>
          <div className="hamburger-box" >
            <div className="hamburger-inner" ></div>
          </div>
        </div>   
      </div>
      { A ? (
            <MenuDesplegable id="xxx" >
              <div style={{width:'100%'}}>
              <Link to="/allcanza/signin"> <LoginBtn>Login</LoginBtn> </Link><span><b>or</b></span><span style={{color:"#E95247"}}><b> sign up </b></span>
              </div>
              <div style={{width:'100%', display:'flex',justifyContent:'center'}}>
              <div style={{width:'95%', height:'2px', background:'#000'}}> </div>
              </div>
              <div style={{width:'100%', display:'flex',justifyContent:'center'}}>
                <BsFillSunFill />
                <BsFillMoonStarsFill />
              </div>
            </MenuDesplegable>
            ):(<></>)
      }
  </>
  )

};

