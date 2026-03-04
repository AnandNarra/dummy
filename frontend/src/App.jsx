import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummy-2-p9ku.onrender.com/api/data')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((json) => {
        setData(json.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1>Dashboard Storage</h1>
        <div className="badge">Backend Connected</div>
      </header>

      <main className="main">
        {loading && <div className="loader">Fetching data...</div>}
        {error && <div className="error">Error: {error}</div>}

        <div className="grid">
          {data.map((item) => (
            <div key={item.id} className="card">
              <div className="card-icon"># {item.id}</div>
              <h3>{item.name}</h3>
              <p>Requested from Express server successfully.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
