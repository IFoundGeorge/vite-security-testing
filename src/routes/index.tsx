import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<any[]>([])

  const [xssInput, setXssInput] = useState('')
  const [renderedXss, setRenderedXss] = useState('')

  // ================= SEARCH =================
  const handleSearch = async () => {
    if (!value.trim()) return

    try {
      const res = await fetch(`http://localhost:3001/search?q=${value}`)
      const data = await res.json()

      if (Array.isArray(data)) {
        setResults(data)
      } else {
        console.error('Expected array but got:', data)
        setResults([])
      }
    } catch (err) {
      console.error('Search error:', err)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // ================= XSS TEST =================
  const handleXssKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setRenderedXss(xssInput)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Security Test Dashboard</h1>

      {/* ================= DATABASE SEARCH ================= */}
      <div style={{ marginTop: '20px' }}>
        <h3>Database Search:</h3>

        <input
          type="text"
          placeholder="Search in database..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '250px',
            marginRight: '10px',
          }}
        />

        <button onClick={handleSearch}>Search</button>

        <div style={{ marginTop: '10px' }}>
          {results.map((item) => (
            <p key={item.id}>There is {item.name}</p>
          ))}
        </div>
      </div>

      {/* ================= XSS TEST ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>XSS Test (Press Enter to execute):</h3>

        <input
          type="text"
          placeholder="Try: <b>Hello</b> or <script>alert(1)</script>"
          value={xssInput}
          onChange={(e) => setXssInput(e.target.value)}
          onKeyDown={handleXssKeyDown}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '350px',
          }}
        />

        <div style={{ marginTop: '10px' }}>
          <strong>Rendered Output:</strong>

          <div
            style={{
              border: '1px solid red',
              padding: '10px',
              marginTop: '5px',
            }}
            dangerouslySetInnerHTML={{ __html: renderedXss }}
          />
        </div>

        <p style={{ color: 'gray' }}>
          ⚠️ This demonstrates XSS rendering (unsafe on purpose)
        </p>
      </div>

      {/* ================= IFRAME TEST ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>Iframe Test (Clickjacking test):</h3>

        <iframe
          src="/"
          width="400"
          height="200"
          style={{
            border: '2px solid red',
          }}
        />

        <p style={{ color: 'gray' }}>
          ⚠️ If this is blocked, your security headers are working
        </p>
      </div>

      {/* ================= CSP TEST ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>CSP Test:</h3>

        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

        <img
          src="https://via.placeholder.com/150"
          alt="Test Image"
        />

        <p>
          Check console for CSP errors (F12)
        </p>
      </div>
    </div>
  )
}