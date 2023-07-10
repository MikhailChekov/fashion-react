import React from "react";
import "./Sale.css";
import saleImg from "../../img/images/sale.jpg";

function Sale() {
  return (
    <section className="sale">
      <div className="sale__img">
        <img src={saleImg} alt="sale offer" />
      </div>
      <div className="sale__text-wrapper">
        <div className="sale__text">
          <div className="sale__title">
            <span className="sale__highlight">
              <span>PAYDAY</span>
            </span>
            <br />
            SALE NOW
          </div>
          <div className="sale__desc">
            <p className="sale__hot">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p>
              <b>1 June - 10 June 2021</b>
              <br />
              *Terms & Conditions apply
            </p>
          </div>
          <button className="sale__btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Sale;
