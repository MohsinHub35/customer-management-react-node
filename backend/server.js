const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* CREATE CUSTOMER */
app.post("/customers", (req, res) => {
  const { firstName, lastName, phone, city, state, pinCode } = req.body;
  db.run(
    `INSERT INTO customers VALUES (NULL,?,?,?,?,?,?)`,
    [firstName, lastName, phone, city, state, pinCode],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

/* GET ALL CUSTOMERS */
app.get("/customers", (req, res) => {
  const { city, state, pinCode } = req.query;
  let query = "SELECT * FROM customers WHERE 1=1";
  let params = [];

  if (city) { query += " AND city=?"; params.push(city); }
  if (state) { query += " AND state=?"; params.push(state); }
  if (pinCode) { query += " AND pinCode=?"; params.push(pinCode); }

  db.all(query, params, (err, rows) => res.json(rows));
});

/* GET CUSTOMER BY ID */
app.get("/customers/:id", (req, res) => {
  db.get(
    "SELECT * FROM customers WHERE id=?",
    [req.params.id],
    (err, row) => res.json(row)
  );
});

/* UPDATE CUSTOMER */
app.put("/customers/:id", (req, res) => {
  const { firstName, lastName, phone } = req.body;
  db.run(
    `UPDATE customers SET firstName=?, lastName=?, phone=? WHERE id=?`,
    [firstName, lastName, phone, req.params.id],
    () => res.json({ success: true })
  );
});

/* DELETE CUSTOMER */
app.delete("/customers/:id", (req, res) => {
  db.run("DELETE FROM customers WHERE id=?", [req.params.id], () =>
    res.json({ success: true })
  );
});

/* ADD ADDRESS */
app.post("/addresses", (req, res) => {
  const { customerId, addressLine, city, state, pinCode } = req.body;
  db.run(
    `INSERT INTO addresses VALUES (NULL,?,?,?,?,?)`,
    [customerId, addressLine, city, state, pinCode],
    () => res.json({ success: true })
  );
});

/* GET ADDRESSES */
app.get("/addresses/:customerId", (req, res) => {
  db.all(
    "SELECT * FROM addresses WHERE customerId=?",
    [req.params.customerId],
    (err, rows) => res.json(rows)
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));
