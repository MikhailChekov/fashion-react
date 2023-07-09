import React from "react";
import styles from "./Card.module.css";
import cat01Img from "../../img/categories/cat-01.jpg";
import cardIconArrow from "../../img/icons/arrow.svg";
// import cat02Img from '../../img/categories/cat-02.jpg';
// import cat03Img from '../../img/categories/cat-03.jpg';

function Card() {
  return (
    <div className={styles.card}>
      <a href="#!" className={styles.card__link}><span className={styles.none}>!</span></a>
      <div className={styles.card__imgwrap}>
        <img src={cat01Img} alt="cat01" className={styles.card__img} />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Hoodies & Sweetshirt</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={cardIconArrow} alt="Open" />
        </div>
      </div>
    </div>
  );
}

export default Card;
