import React from "react";
import "./Promo.css";
import promoImg from "../../img/images/promo-img.jpg";

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="promo__highligth">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="promo__highligth promo__highligth--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <button className="promo__btn"> Shop Now</button>
            </div>
          </div>
          <div className="promo__image">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Promo;
