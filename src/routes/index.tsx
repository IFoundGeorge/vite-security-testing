import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = () => {
    setSubmitted(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Security Header Test</h1>

      {/* INPUT + BUTTON */}
      <div style={{ marginTop: '20px' }}>
        <h3>Input Test:</h3>

        <input
          type="text"
          placeholder="Type something..."
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

        <button
          onClick={handleSubmit}
          style={{
            padding: '8px 12px',
            cursor: 'pointer',
          }}
        >
          Enter
        </button>

        <p>Live value: {value}</p>
        <p>Submitted value: {submitted}</p>
      </div>

      {/* TEST 1: CSP Script Blocking */}
      <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

      {/* TEST 2: CSP Image Blocking */}
      <img src="https://via.placeholder.com/150" alt="Test Secure Image" />

      {/* TEST 3: Clickjacking Protection */}
      <div style={{ marginTop: '20px', border: '1px solid red' }}>
        <h3>Iframe Test (Should be blocked):</h3>
        <iframe src="/" width="300" height="200"></iframe>
      </div>

      <p>
        Check your <strong>Browser Console (F12)</strong> for red CSP violation
        errors.
      </p>
    </div>
  )
}