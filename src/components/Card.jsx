import React from "react";
import "../card.css";

const Card = ({ nev, ar, kep }) => {
    console.log(kep);
    const URL = `https://nodejs306.dszcbaross.edu.hu/uploads/${kep}`
  return (
    <div className="card">
      <img src={URL} alt="card" className="card-image" />
      <div className="card-content">
        <p className="card-title">{nev}</p>
        <p className="card-price">{ar} ft</p>
      </div>
    </div>
  );
};

export default Card;