import { useEffect, useState } from 'react'
import { SoulFrequency } from '../components/soul-archetype/SoulFrequency'
import { WhoIAm } from '../components/soul-archetype/WhoIAm'
import { CoreStrengths } from '../components/soul-archetype/CoreStrengths'
import { ShadowAspects } from '../components/soul-archetype/ShadowAspects'
import { Purpose } from '../components/soul-archetype/Purpose'
import { SoulArchitecture } from '../components/soul-archetype/SoulArchitecture'

interface SoulArchetype {
  soul_frequency: any
  who_i_am: string
  core_strengths: string[]
  shadow_aspects: string[]
  purpose: string
  soul_architecture: any
}

export function SoulArchetypePage() {
  const [archetype, setArchetype] = useState<SoulArchetype | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For testing: Generate with sample data
    const testData = {
      birth_data: {
        date: "1990-01-01",
        time: "12:00",
        location: "New York, NY",
        timezone: "America/New_York"
      },
      user_id: `test-user-${Date.now()}`,
      all_systems: {}
    }

    // Fetch unique archetype from backend
    fetch('/api/soul-archetype', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    })
      .then(res => res.json())
      .then(data => {
        setArchetype(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching archetype:', err)
        // Fallback to test data if backend not available
        setArchetype({
          soul_frequency: { frequency: "432 Hz", resonance: "Harmonic", vibration: "High" },
          who_i_am: "You are a unique soul with a cosmic blueprint unlike any other. Your journey through the mystical systems creates an identity that is entirely your own.",
          core_strengths: ["Intuitive Wisdom", "Creative Expression", "Transformative Power"],
          shadow_aspects: ["Perfectionism", "Overthinking", "Emotional Intensity"],
          purpose: "To bridge the mystical and material worlds, bringing ancient wisdom into modern life.",
          soul_architecture: {
            foundation: "Astrological Big 3",
            structure: "Human Design Type",
            expression: "Life Path Number",
            integration: "All 30+ Systems Unified"
          }
        })
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="soul-archetype-loading">
        <div className="loading-spinner" />
        <p>Aligning the cosmic energies...</p>
      </div>
    )
  }

  if (!archetype) {
    return (
      <div className="soul-archetype-error">
        <p>Unable to generate your soul archetype. Please try again.</p>
      </div>
    )
  }

  return (
    <div className="soul-archetype-container">
      {/* Render's clean vertical layout with Replit's polish */}
      
      <SoulFrequency data={archetype.soul_frequency} />
      
      {/* YOUR FAVORITE SECTION - Must be unique per user */}
      <WhoIAm 
        content={archetype.who_i_am}
        className="favorite-section highlighted"
      />
      
      <CoreStrengths data={archetype.core_strengths} />
      <ShadowAspects data={archetype.shadow_aspects} />
      <Purpose data={archetype.purpose} />
      <SoulArchitecture data={archetype.soul_architecture} />
    </div>
  )
}
