import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import DOMPurify from 'dompurify'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<any[]>([])

  const [xssInput, setXssInput] = useState('')
  const [renderedXss, setRenderedXss] = useState('')

  const [safeInput, setSafeInput] = useState('')
  const [strictInput, setStrictInput] = useState('')

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
    if (e.key === 'Enter') handleSearch()
  }

  // ================= XSS TEST =================
  const handleXssKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setRenderedXss(xssInput)
    }
  }

  // ================= STRICT ESCAPE =================
  const escapeHTML = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
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
        />

        <button onClick={handleSearch}>Search</button>

        <div style={{ marginTop: '10px' }}>
          {results.map((item) => (
            <p key={item.id}>There is {item.name}</p>
          ))}
        </div>
      </div>

      {/* ================= XSS TEST (UNSAFE) ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>XSS Test (Unsafe):</h3>

        <input
          type="text"
          placeholder="<script>alert(1)</script>"
          value={xssInput}
          onChange={(e) => setXssInput(e.target.value)}
          onKeyDown={handleXssKeyDown}
        />

        <div
          style={{
            border: '1px solid red',
            padding: '10px',
            marginTop: '10px',
          }}
          dangerouslySetInnerHTML={{ __html: renderedXss }}
        />

        <p style={{ color: 'gray' }}>
          Vulnerable: renders raw HTML
        </p>
      </div>

      {/* ================= SAFE INPUT ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>Safe Input (React Escaped):</h3>

        <input
          type="text"
          placeholder="<b>Hello</b>"
          value={safeInput}
          onChange={(e) => setSafeInput(e.target.value)}
        />

        <div
          style={{
            border: '1px solid green',
            padding: '10px',
            marginTop: '10px',
          }}
        >
          {safeInput}
        </div>

        <p style={{ color: 'gray' }}>
          Safe: React escapes HTML automatically
        </p>
      </div>

      {/* ================= SANITIZED INPUT ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>Sanitized Input (Filtered HTML):</h3>

        <div
          style={{
            border: '1px solid orange',
            padding: '10px',
            marginTop: '10px',
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(safeInput),
          }}
        />

        <p style={{ color: 'gray' }}>
          Allows safe HTML, removes scripts
        </p>
      </div>

      {/* ================= STRICT INPUT ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>Strict Input (No HTML Allowed):</h3>

        <input
          type="text"
          placeholder="<script>alert(1)</script>"
          value={strictInput}
          onChange={(e) => setStrictInput(e.target.value)}
        />

        <div
          style={{
            border: '1px solid blue',
            padding: '10px',
            marginTop: '10px',
          }}
        >
          {escapeHTML(strictInput)}
        </div>

        <p style={{ color: 'gray' }}>
          Strict: everything is escaped, zero HTML rendering
        </p>
      </div>

      {/* ================= IFRAME TEST ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>Iframe Test (Clickjacking):</h3>

        <iframe
          src="/"
          width="400"
          height="200"
          style={{ border: '2px solid red' }}
        />

        <p style={{ color: 'gray' }}>
          Should be blocked if X-Frame-Options works
        </p>
      </div>

      {/* ================= CSP TEST ================= */}
      <div style={{ marginTop: '40px' }}>
        <h3>CSP Test:</h3>

        <img
          src="https://via.placeholder.com/150"
          alt="Test"
        />

        <p>Check console (F12) for CSP violations</p>
      </div>
    </div>
  )
}