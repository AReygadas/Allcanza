import React from "react";

export const Celsu = () => {
  return (
    <>
      <div style={{margin:'15px', display: 'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nqJ92Y42wNQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{margin:'auto'}}>
         <h1>Titulo</h1>
         <h3 > 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab sed
            in consequatur itaque quos laboriosam neque maxime consequuntur nam,
            at consectetur illum unde voluptates eveniet blanditiis impedit vel
            odit.
          </h3>
        </div>
      </div>
      <div style={{textAlign:'center'}}>
        <h1>Planes</h1>
      </div>
    </>
  );
};
