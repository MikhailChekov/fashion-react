import React from "react";
import "./MobileApp.css";
import googleImg from "../../img/icons/google-play.png";
import appStoreImg from "../../img/icons/app-store.png";
import appImg from "../../img/images/app.png";

function MobileApp() {
  return (
    <section className="mobile-app">
      <div className="mobile-app__text">
        <div className="mobile-app__title">DOWNLOAD APP & GET THE VOUCHER!</div>
        <div className="mobile-app__desc">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </div>
        <div className="mobile-app__btns">
          <a href="#!" className="mobile-app__google">
            <img src={googleImg} alt="google play app" />
          </a>
          <a href="#!" className="mobile-app__apple">
            <img src={appStoreImg} alt="AppStore app" />
          </a>
        </div>
      </div>
      <div className="mobile-app__image">
        <img src={appImg} alt="app screen" />
      </div>
    </section>
  );
}

export default MobileApp;
