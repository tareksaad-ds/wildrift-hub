import { useState } from 'react'
import './App.css'

/** Root landing page for Tekoo Hub coaching service. */
export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  /** Validates the email and marks the form as submitted. */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-badge">Mid Lane Coaching</div>
        <h1 className="hero-title">
          Tekoo <span className="accent">Hub</span>
        </h1>
        <p className="hero-subtitle">
          Top-tier Mid Lane player ready to take your game to the next level.
          Whether you're climbing ranked or perfecting your mechanics, Tekoo has
          you covered.
        </p>
      </header>

      <section className="stats">
        <div className="stat">
          <span className="stat-value">Challenger</span>
          <span className="stat-label">Peak Rank</span>
        </div>
        <div className="stat">
          <span className="stat-value">Mid Lane</span>
          <span className="stat-label">Main Role</span>
        </div>
        <div className="stat">
          <span className="stat-value">500+</span>
          <span className="stat-label">Students Coached</span>
        </div>
      </section>

      <section className="coaching">
        <h2>What You'll Learn</h2>
        <ul className="coaching-list">
          <li>Wave management &amp; lane control</li>
          <li>Roaming timing and impact</li>
          <li>Champion matchup theory</li>
          <li>Vision control and map awareness</li>
          <li>Mental game and tilt control</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Get Coached by Tekoo</h2>
        <p>Drop your email and Tekoo will reach out to set up your first session.</p>

        {submitted ? (
          <div className="success">
            <span className="success-icon">✓</span>
            <p>You're on the list! Tekoo will contact you soon.</p>
          </div>
        ) : (
          <form className="email-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className="email-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="submit-btn">
              Contact Me
            </button>
            {error && <p className="form-error">{error}</p>}
          </form>
        )}
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tekoo Hub · League of Legends Coaching</p>
      </footer>
    </div>
  )
}
