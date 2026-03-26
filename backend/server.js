import express from 'express'
import sqlite3 from 'sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

// ===================
// REMOVE CORS RESTRICTION
// ===================
import cors from 'cors'
app.use(cors()) // allows ALL origins

// ===================
// REMOVE HELMET IF YOU WANT FULL OPEN ACCESS
// ===================
// import helmet from 'helmet'
// app.use(helmet())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dbPath = path.join(__dirname, 'database.db')

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('DB ERROR:', err)
  else console.log('Connected to DB:', dbPath)
})

// Simple admin middleware (optional)
function requireAdmin(req, res, next) {
  next() // allow all for testing
}

// === Routes ===
app.get('/', (req, res) => res.send('Server is running 🚀'))

app.get('/search', (req, res) => {
  const q = req.query.q || ''
  db.all(`SELECT * FROM users WHERE name LIKE ?`, [`%${q}%`], (err, rows) => {
    if (err) {
      console.error('Database Search Error:', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
    res.json(rows)
  })
})

app.get('/user/:id', (req, res) => {
  const userId = req.params.id
  db.get(`SELECT * FROM users WHERE id = ?`, [userId], (err, row) => {
    if (err) {
      console.error('Database User Error:', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
    if (!row) return res.status(404).json({ error: 'User not found' })
    res.json(row)
  })
})

// === DB setup ===
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)`)
  db.run(`DELETE FROM users`)
  const stmt = db.prepare(`INSERT INTO users (name) VALUES (?)`)
  const names = ['Cyrus', 'Bob', 'Alice', 'Grace', 'Porter']
  names.forEach(name => stmt.run(name))
  stmt.finalize()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`))