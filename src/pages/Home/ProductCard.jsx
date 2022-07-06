import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Card, ImgBx, Img, ContentBx, H2, Size, Button} from './Styles2';

export const ProductCard =(props)=>{


    return(
        <Container>
        
        <Card colorA={props.colorA} colorB={props.colorB}>         

          <ImgBx>
            <Img
              src={props.logo}
              alt="nike-air-shoe"
            />
          </ImgBx>

          <ContentBx>
            <H2>{props.title}</H2>

            <Size>
              <h7 style={{color:'#fff'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h7>
            </Size>
            <Link to='/allcanza/celsu'>
            <Button >Ver Más</Button></Link>
          </ContentBx>      

        </Card>
        </Container>
    )

}