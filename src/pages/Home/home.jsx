import React from "react";
import {
  FondoHead,
  Persons,
  SubTitle,
  Title,
  Parrafo,
  ButtonLink,
  ComponentesAdd,
  Divicion,
  SectionA,
  GlobalStyle,
} from "./styles";
import IMG03 from "../../images/people.png";
import logo1 from '../../images/citizenship.png';
import logo2 from '../../images/translations.png';
import logo3 from '../../images/Greencard.png';
import {Category} from '../../components/FlipCard/Categori';
import {Category2} from '../../components/FlipCard/Categori2';



export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <FondoHead>
        <Persons src={IMG03} />
        <ComponentesAdd>
          <Title>Immigration Services</Title>
          <SubTitle>Completely Secured</SubTitle>
          <Divicion></Divicion>
          <Parrafo>
            With guidance every step of the way, Allcanza helps people reach
            their new beginning with best-in-class Immigration services.
          </Parrafo>
          <ButtonLink> Vew Products</ButtonLink>
        </ComponentesAdd>
      </FondoHead>
      <h2 style={{ color: "#fff", textAlign: "center", fontSize: "4rem" }}>
        Our Productos
      </h2>      
      <SectionA>
        {/* <Products /> */}
        <Category
          colorB="#a201ff"
          colorA="#45abff"
          logo="https://celsuniversity.academy/Login2/Clog.png"
          title="Cels University"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          linkt='/celsu'
        />
          <Category 
           colorA="#f9a3ff" 
           colorB="#7e00a4" 
           logo={logo1}
           title="Spanish to English Translations"
           description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
         />
          <Category 
           colorA="#ffd900" 
           colorB="#00b7ff" 
           logo={logo2}
           title="Naturalization (Citizenship)"
           description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
         />
          <Category 
            colorA="#ec2efb" 
            colorB="#B9FF33" 
            logo={logo3}
            title="Green Card "
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        <Category
          colorA="#08fca7"
          colorB="#01c2fd"
          logo="https://i0.wp.com/celsadventures.com/wp-content/uploads/2021/11/cels-adventures-logo-2.png?resize=150%2C150&ssl=1"
          title="Cels Adventures"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Category
          colorA="#fa0700"
          colorB="#4849f9"
          logo="https://celsuniversity.com/celsus/wp-content/uploads/2021/09/logoo.png"
          title="Cels US"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />   
   
      </SectionA>
      <SectionA>
      <Category2
          colorA="#fa0700"
          colorB="#4849f9"
          logo="https://celsuniversity.com/celsus/wp-content/uploads/2021/09/logoo.png"
          title="Cels US"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />   
   
      </SectionA>
      
    </>
  );
};
