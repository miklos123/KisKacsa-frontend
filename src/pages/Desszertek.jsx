import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import "../desszertek.css";

const Italok = () => {
  const [cards, setCards] = useState([]);
  const [kereses, setKereses] = useState("");
  const navigate = useNavigate();
  console.log(cards);

  useEffect(() => {
    fetch("/users/desszertek")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  const szurtCards = cards.filter((card) =>
    card.nev.toLowerCase().includes(kereses.toLowerCase())
  );

  return (
    <div className="italok-container">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="left-icons">
        <button className="icon back" onClick={() => navigate(-1)}>
            ←
          </button>
          <button className="icon add" onClick={() => setShowAdd(true)}>
            +
          </button>
          <button className="icon edit">✎</button>
        </div>

        <h1 className="title">Desszertek</h1>

        <div className="right-icons">
          <input
            className="search"
            placeholder="Keresés"
            value={kereses}
            onChange={(e) => setKereses(e.target.value)}
          />
          <button className="icon delete">🗑</button>
        </div>
      </div>

      {/* CARD GRID */}
      <div className="card-grid">
      {szurtCards.map((card) => (
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