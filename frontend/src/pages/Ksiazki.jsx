import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 

const Ksiazki = () => {
  const [ksiazki, setKsiazki] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:8800/ksiazki");
        setKsiazki(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAll();
  }, []);

  console.log(ksiazki);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/ksiazki/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Moja Biblioteczka</h1>
      <div className="ksiazki">
        {ksiazki.map((ksiazka) => (
          <div key={ksiazka.id} className="ksiazka">
            <img src={ksiazka.okladka} alt="" />
            <h2>{ksiazka.tytul}</h2>
            <p>{ksiazka.opis}</p>
            <span>{ksiazka.gatunek}</span>
            <button className="delete" onClick={() => handleDelete(ksiazka.id)}>Usuń</button>
            <button className="aktualizuj">
              <Link
                to={`/Aktualizuj/${ksiazka.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Aktualizuj
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="dodaj">
        <Link to="/dodaj" style={{ color: "inherit", textDecoration: "none" }}>
          Dodaj nową książkę
        </Link>
      </button>
    </div>
  );
};

export default Ksiazki;