import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1 className="hero-title">Unveil Your Cosmic Blueprint</h1>
        <p className="hero-subtitle">
          Where Mind, Body & Soul Converge
        </p>
        <p className="hero-description">
          Synthesize 30+ ancient wisdom systems — Western & Vedic astrology, 
          Human Design, Gene Keys, Numerology, Tarot, I Ching — into your 
          personalized Ultimate Soul Codex.
        </p>
        
        <div className="hero-actions">
          <Link to="/archetype" className="btn-primary">
            Begin Your Journey
          </Link>
          <button className="btn-secondary">Watch Demo</button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">4.9/5</div>
            <div className="stat-label">Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50K+</div>
            <div className="stat-label">Soul Profiles</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Private & Secure</div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <h2 className="section-title">30+ Mystical Systems</h2>
        <p className="section-description">
          The most comprehensive soul analysis ever created
        </p>
        {/* Systems grid would go here */}
      </section>
      
      <section className="pricing-section">
        <h2 className="section-title">Choose Your Path</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Codex Snapshot</h3>
            <div className="price">Free</div>
            <ul>
              <li>Astrology Big 3</li>
              <li>Life Path Number</li>
              <li>Basic Enneagram</li>
            </ul>
            <Link to="/archetype" className="btn-primary">Start Free</Link>
          </div>
          
          <div className="pricing-card featured">
            <h3>Full Soul Codex</h3>
            <div className="price">$47</div>
            <div className="price-note">One-time unlock</div>
            <ul>
              <li>Everything in Free</li>
              <li>Complete astrology charts</li>
              <li>Full Human Design + Gene Keys</li>
              <li>12+ mystical systems</li>
              <li>Astrocartography map</li>
              <li>30-40 page PDF dossier</li>
            </ul>
            <button className="btn-primary">Unlock Complete Codex</button>
          </div>
        </div>
      </section>
    </div>
  )
}
