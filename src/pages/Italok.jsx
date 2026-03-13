import { useState, useEffect } from "react";

export default function Italok() {

  const [italok, setItalok] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/users/italok")
      .then(res => res.json())
      .then(data => setItalok(data));
  }, []);

  return (
    <div className="grid">

      {italok.map(ital => (
        <div key={ital.id} className="card">

          <div className="image"></div>

          <div>{ital.name}</div>
          <div>{ital.price} Ft</div>
          <div>{ital.desc}</div>

        </div>
      ))}

    </div>
  );
}