import express from 'express'
import sqlite3 from 'sqlite3'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, 'database.db')

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('DB ERROR:', err)
  } else {
    console.log('Connected to DB:', dbPath)
  }
})

app.get('/', (req, res) => {
  res.send('Server is running 🚀')
})

app.get('/search', (req, res) => {
  const q = req.query.q || ''

  db.all(
    `SELECT * FROM users WHERE name LIKE ?`,
    [`%${q}%`],
    (err, rows) => {
      if (err) {
        console.error('SQL ERROR:', err)
        return res.json([])
      }

      res.json(rows)
    }
  )
})

app.get('/user/:id', (req, res) => {
  const userId = req.params.id

  db.get(
    `SELECT * FROM users WHERE id = ?`,
    [userId],
    (err, row) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ error: 'DB error' })
      }

      if (!row) {
        return res.status(404).json({ error: 'User not found' })
      }

      // ❌ No authentication / ownership check
      res.json(row)
    }
  )
})

app.get('/admin/users', (req, res) => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'DB error' })
    }

    res.json({
      message: 'Admin Data (UNPROTECTED)',
      data: rows
    })
  })
})

app.get('/admin/secure', (req, res) => {
  const role = req.headers['role']

  if (role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' })
  }

  res.json({
    message: 'Secret Admin Panel',
    users: ['Cyrus', 'Bob', 'Alice']
  })
})

app.get('/accountInfo', (req, res) => {
  const acct = req.query.acct

  const accounts = {
    cyrus: { balance: 10000 },
    bob: { balance: 5000 },
    alice: { balance: 2000 }
  }

  res.json(accounts[acct] || { error: 'Account not found' })
})


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `)

  db.run(`DELETE FROM users`) 

  db.run(`INSERT INTO users (name) VALUES ('Cyrus')`)
  db.run(`INSERT INTO users (name) VALUES ('Bob')`)
  db.run(`INSERT INTO users (name) VALUES ('Alice')`)
  db.run(`INSERT INTO users (name) VALUES ('Grace')`)
  db.run(`INSERT INTO users (name) VALUES ('Porter')`)
})

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001')
})