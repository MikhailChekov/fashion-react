import React from 'react';
import './Arrivals.css';

function Arrivals() {
  return (
    <section className="arrivals">
        <div className="container">
            <div className="arrivals__header">
                <h2 className="arrivals__title title-2">NEW ARRIVALS</h2>
            </div>
            <div className="arrivals__items">
                <div className="arrivals__item">1</div>
                <div className="arrivals__item">2</div>
                <div className="arrivals__item">3</div>
            </div>
        </div>
    </section>
  )
}

export default Arrivals;