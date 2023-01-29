import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"jsp",
    password:"123456", 
    database:"js_project"
});

app.get("/", (req, res) => {
  res.json("Czesc");
});

app.get("/ksiazki", (req, res) => {
  const q = "SELECT * FROM ksiazki";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/ksiazki", (req, res) => {
  const q = "INSERT INTO ksiazki(`tytul`, `opis`, `gatunek`, `okladka`) VALUES (?)";

  const values = [
    req.body.tytul,
    req.body.opis,
    req.body.gatunek,
    req.body.okladka,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/ksiazki/:id", (req, res) => {
  const ksiazkaId = req.params.id;
  const q = " DELETE FROM ksiazki WHERE id = ? ";

  db.query(q, [ksiazkaId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/ksiazki/:id", (req, res) => {
  const ksiazkaId = req.params.id;
  const q = "UPDATE ksiazki SET `tytul`= ?, `opis`= ?, `gatunek`= ?, `okladka`= ? WHERE id = ?";

  const values = [
    req.body.tytul,
    req.body.opis,
    req.body.gatunek,
    req.body.okladka,
  ];

  db.query(q, [...values,ksiazkaId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Backend OK");
});