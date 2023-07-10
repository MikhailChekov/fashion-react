import React from "react";
import styles from "./Card.module.css";
import cardIconArrow from "../../img/icons/arrow.svg";

function Card({ title, img }) {
  return (
    <div className={styles.card}>
      <a href="#!" className={styles.card__link}>
        <span className={styles.none}>!</span>
      </a>
      <div className={styles.card__imgwrap}>
        <img src={img} alt="cat01" className={styles.card__img} />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{title}</div>
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
