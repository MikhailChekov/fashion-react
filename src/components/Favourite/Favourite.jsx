import React from "react";
import "./Favourite.css";
import Card from "../Card/Card";
import favImg1 from '../../img/images/favourite-1.jpg';
import favImg2 from '../../img/images/favourite-2.jpg';

function Favourite() {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__title title-2">Young’s Favourite</div>
        <div className="favourite__cards">
          <Card title="Trending on instagram" img={favImg1} />
          <Card title="All Under $40" img={favImg2} />
        </div>
      </div>
    </section>
  );
}

export default Favourite;
