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
  Button,
  Cost,
  Decimal,GlobalStyles
} from "./styles2";

export const Category2 = (props) => {
  return (
    <>
      <Card>
        <Front>
          <Contenido>
            <div>
              <img />
              <h1>Cels US</h1>
              <h2>the better path</h2>
              <h2>for citizennship</h2>
            </div>
            <div>Products options sub categories</div>

            <div>
              <div>
                <h1>Buy it now!</h1>
                <h3>only for:</h3>
              </div>
              <h3>$199</h3>
              <h1>$90</h1>
              <span>usd.</span>
              <div></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nam maiores vel nobis suscipit vitae aliquam optio.
            </p>
            <Button>more info</Button>
            <Button>Buy it now!</Button>
          </Contenido>
        </Front>

        <Back>
          <Contenido></Contenido>
        </Back>
      </Card>
    </>
  );
};
