import React from 'react';
import Card from '../Card/Card';
import './Arrivals.css';

function Arrivals() {
  return (
    <section className="arrivals">
        <div className="container">
            <div className="arrivals__header">
                <h2 className="arrivals__title title-2">NEW ARRIVALS</h2>
            </div>
            <div className="arrivals__cards">
                <Card />
                <Card />
                <Card />
                {/* <Card />
                <Card /> */}
            </div>
        </div>
    </section>
  )
}

export default Arrivals;