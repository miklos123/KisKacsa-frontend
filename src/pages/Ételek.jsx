import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import "../etelek.css";

const Etelek = () => {
  const [cards, setCards] = useState([]);
  const [kereses, setKereses] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [ujTermek, setUjTermek] = useState({
    nev: "",
    ar: "",
    kep: "",
  });

  const handleDelete = async (id) => {
    try {
      await fetch(`https://nodejs306.dszcbaross.edu.hu/termekek/${id}`, {
        method: "DELETE",
      });

      setCards(cards.filter((card) => card.termek_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users/etelek")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  const szurtCards = cards.filter((card) =>
    card.nev.toLowerCase().includes(kereses.toLowerCase())
  );

const handleAdd = async () => {
  try {
    const res = await fetch("https://nodejs306.dszcbaross.edu.hu/termekek", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nev: ujTermek.nev,
        ar: ujTermek.ar,
        kep: ujTermek.kep,
        kategoria_id: 1,
      }),
    });

    if (!res.ok) throw new Error("POST hiba");

    // friss lista
    const res2 = await fetch("https://nodejs306.dszcbaross.edu.hu/termekek");
    const data = await res2.json();
    setCards(data);

    setUjTermek({ nev: "", ar: "", kep: "" });
    setShowAdd(false);

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="etelek-container">
      <div className="topbar">
        <div className="left-icons">
          <button className="icon back" onClick={() => navigate(-1)}>
            ←
          </button>

          <button className="icon add" onClick={() => setShowAdd(true)}>
            +
          </button>
        </div>

        <h1 className="title">Ételek</h1>

        <div className="right-icons">
          <input
            className="search"
            placeholder="Keresés"
            value={kereses}
            onChange={(e) => setKereses(e.target.value)}
          />
        </div>
      </div>

      {showAdd && (
        <div className="edit-modal">
          <h2>Új étel</h2>

          <input
            type="text"
            placeholder="Név"
            value={ujTermek.nev}
            onChange={(e) =>
              setUjTermek({ ...ujTermek, nev: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Ár"
            value={ujTermek.ar}
            onChange={(e) =>
              setUjTermek({ ...ujTermek, ar: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Kép fájlnév (pl: rantott_csirke.jpg)"
            value={ujTermek.kep}
            onChange={(e) =>
              setUjTermek({ ...ujTermek, kep: e.target.value })
            }
          />
          <button onClick={handleAdd}>Hozzáadás</button>
          <button onClick={() => setShowAdd(false)}>Mégse</button>
        </div>
      )}

      <div className="card-grid">
        {szurtCards.map((card) => (
          <Card
            key={card.termek_id}
            nev={card.nev}
            ar={card.ar}
            kep={card.kep}
            onDelete={() => handleDelete(card.termek_id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Etelek;