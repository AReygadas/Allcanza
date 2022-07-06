import React from "react";
import "./styler.css";

export const Products = () => {
  return (
    <>
      <div className="containerB">
        <div className="card">
          <div className="imgBx">
            <img
              src="https://celsuniversity.academy/Login2/Clog.png"
              alt="nike-air-shoe"
            />
          </div>

          <div className="contentBx">
            <h2>Cels University</h2>

            <div className="size">
              <h7 style={{color:'#fff'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h7>
            </div>

            {/* <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <a href="#">Ver Más</a>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            <img
              src="https://i0.wp.com/celsadventures.com/wp-content/uploads/2021/11/cels-adventures-logo-2.png?resize=150%2C150&ssl=1"
              alt="nike-air-shoe"
            />
          </div>

          <div className="contentBx">
            <h2>Cels Adventures</h2>

            <div className="size">
              <h7 style={{color:'#fff'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h7>
            </div>

            {/* <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <a href="#">Ver Más</a>
          </div>
        </div>
        
        <div className="card">
          <div className="imgBx">
            <img
              src="https://celsuniversity.com/celsus/wp-content/uploads/2021/09/logoo.png"
              alt="nike-air-shoe"
            />
          </div>

          <div className="contentBx">
            <h2></h2>

            <div className="size">
              <h7 style={{color:'#fff'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h7>
            </div>

            {/* <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            <a href="#">Ver Más</a>
          </div>
        </div>
      </div>


    </>
  );
};
