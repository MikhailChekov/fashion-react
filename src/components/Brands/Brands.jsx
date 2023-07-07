import React from 'react';
import './Brands.css';

import hm from '../../img/brands/HM.png';
import obey from '../../img/brands/Obey.png';
import shopify from '../../img/brands/Shopify.png';
import lacoste from '../../img/brands/Lacoste.png';
import levis from '../../img/brands/Levis.png';
import amazon from '../../img/brands/Amazon.png';

function Brands() {
  return (
    <section className="brands">
        <ul className="brands__list">
            <li><a href="#!"><img src={hm} alt="hm" /></a></li>
            <li><a href="#!"><img src={obey} alt="obey" /></a></li>
            <li><a href="#!"><img src={shopify} alt="shopify" /></a></li>
            <li><a href="#!"><img src={lacoste} className="curve__img" alt="lacoste" /></a></li>
            <li><a href="#!"><img src={levis} alt="levis" /></a></li>
            <li><a href="#!"><img src={amazon} alt="amazon" /></a></li>
        </ul>
    </section>
  )
}

export default Brands;