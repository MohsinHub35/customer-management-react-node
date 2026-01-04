const sqlite3=require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      phone TEXT,
      city TEXT,
      state TEXT,
      pinCode TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS addresses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customerId INTEGER,
      addressLine TEXT,
      city TEXT,
      state TEXT,
      pinCode TEXT,
      FOREIGN KEY(customerId) REFERENCES customers(id)
    )
  `);
});

module.exports = db;
