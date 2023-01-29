import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Aktualizuj = () => {
  const [ksiazka, setKsiazka] = useState({
    tytul: "",
    opis: "",
    gatunek: "",
    okladka: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const ksiazkaId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setKsiazka((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/ksiazki/${ksiazkaId}`, ksiazka);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Aktualizuj książkę</h1>
      <input
        type="text"
        placeholder="Tytuł książki"
        name="tytul"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Opis książki"
        name="opis"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Gatunek"
        name="gatunek"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Okładka"
        name="okladka"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Aktualizuj</button>
      {error && "Coś poszło nie tak..."}
      <Link to="/">Wszystkie książki</Link>
    </div>
  );
};

export default Aktualizuj;