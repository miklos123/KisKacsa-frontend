import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../etelek.css";

const Italok = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    fetch("/users/etelek")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="italok-container">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="left-icons">
          <button className="icon back">←</button>
          <button className="icon add">+</button>
          <button className="icon edit">✎</button>
        </div>

        <h1 className="title">Ételek</h1>

        <div className="right-icons">
          <input className="search" placeholder="Keresés" />
          <button className="icon delete">🗑</button>
        </div>
      </div>

      {/* CARD GRID */}
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            nev={card.nev}
            ar={card.ar}
            kep={card.kep}
          />
        ))}
      </div>
    </div>
  );
};

export default Italok;