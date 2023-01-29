import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dodaj = () => {
  const [ksiazka, setKsiazka] = useState({
    tytul: "",
    opis: "",
    gatunek: "",
    okladka: "",
  });
  const [error,setError] = useState(false)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setKsiazka((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/ksiazki", ksiazka);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };
  return (
    <div className="form">
      <h1>Dodaj książkę</h1>
      <input
        type="text"
        placeholder="Tytuł książki"
        name="tytul"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Opis"
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
      <button onClick={handleClick}>Dodaj</button>
      {error && "Coś poszło nie tak..."}
      <Link to="/">Wszystkie książki</Link>
    </div>
  );
};
export default Dodaj;