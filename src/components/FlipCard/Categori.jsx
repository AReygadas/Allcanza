import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Front,
  Back,
  Contenido,
  ImgBx,
  Img,
  ContentBx,
  H2,
  Size,
  Button,Cost,Decimal
} from "./styles";

export const Category = (props) => {
  return (
    <>
      <Card>
        <Front colorA={props.colorA} colorB={props.colorB}>
          <Contenido>
            <ImgBx>
              <Img src={props.logo} alt="nike-air-shoe" />
            </ImgBx>
            <ContentBx>
              <H2>{props.title}</H2>
              <Size>
                <p style={{ color: "#fff" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Size>                       
            </ContentBx>
          </Contenido>
        </Front>

        <Back>
          <Contenido>
          <Button>more info</Button>
          <Button>Buy it now!</Button>
          </Contenido>
        </Back>
      </Card>
    </>
  );
};
