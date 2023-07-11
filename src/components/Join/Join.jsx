import React from "react";
import "./Join.css";

function Join() {
  return (
    <section className="join">
      <div className="container">
        <div className="join__content">
          <div className="join__title">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </div>
          <div className="join_desc">
            Type your email down below and be young wild generation
          </div>
          <div className="join__form">
            <form>
              <input type="text" placeholder="Add your email here" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
