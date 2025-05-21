// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path    = require('path');
const fs      = require('fs');

const app = express();

// Body parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static client files
app.use(express.static(path.join(__dirname, 'docs')));

// Database setup: seed from teams.sql if DB doesn't exist
const dataDir  = path.join(__dirname, 'data');
const dbPath   = path.join(dataDir, 'teams.db');
const seedFile = path.join(__dirname, 'teams.sql');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
const isNewDb = !fs.existsSync(dbPath);

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('Failed to open database:', err.message);
    process.exit(1);
  }
  console.log('Opened database at', dbPath);

  if (isNewDb) {
    const sql = fs.readFileSync(seedFile, 'utf8');
    db.exec(sql, seedErr => {
      if (seedErr) console.error('Seeding error:', seedErr.message);
      else console.log('Database seeded from', seedFile);
    });
  }
});

// Quiz endpoint: read answers, query SQLite
app.post('/api/quiz', (req, res) => {
  const { color, style, league, atmosphere } = req.body;
  if (!color || !style || !league || !atmosphere) {
    return res.status(400).json({ team: 'Please answer all questions.' });
  }

  const query = `
    SELECT team
      FROM teams
     WHERE jersey_color = ?
       AND play_style   = ?
       AND league       = ?
       AND atmosphere   = ?
  `;

  db.all(query, [color, style, league, atmosphere], (err, rows) => {
    if (err) {
      console.error('Query error:', err.message);
      return res.status(500).json({ team: 'Database error.' });
    }
    if (!rows.length) {
      return res.json({ team: 'No matching team found.' });
    }
    const result = rows.map(r => r.team).join(', ');
    res.json({ team: result });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));