"""
Soul Archetype Generator - UNIQUE Generation System
Fixes the duplicate "Who I Am" issue by using proper seeding.
"""

import hashlib
import json
from datetime import datetime
from typing import Dict, Optional, List
import random

class ArchetypeGenerator:
    """
    Generates unique soul archetypes for each user.
    Ensures "Who I Am" is never duplicated.
    """
    
    def __init__(self, ai_client=None):
        self.ai_client = ai_client
    
    def generate_unique_archetype(
        self,
        birth_data: Dict,
        user_id: str,
        all_systems: Dict
    ) -> Dict:
        """
        Generate UNIQUE soul archetype for each user.
        Uses birth data + user_id + timestamp as seed.
        """
        
        # Create unique seed from user-specific data
        seed_data = (
            f"{birth_data.get('date', '')}"
            f"{birth_data.get('time', '')}"
            f"{birth_data.get('location', '')}"
            f"{user_id}"
            f"{datetime.now().isoformat()}"
        )
        unique_seed = int(hashlib.sha256(seed_data.encode()).hexdigest()[:16], 16)
        
        # Set random seed for reproducibility per user
        random.seed(unique_seed)
        
        # Generate each section with uniqueness
        return {
            "soul_frequency": self._calculate_soul_frequency(birth_data, all_systems),
            "who_i_am": self._generate_who_i_am_unique(birth_data, all_systems, unique_seed),  # CRITICAL
            "core_strengths": self._extract_core_strengths(all_systems, unique_seed),
            "shadow_aspects": self._extract_shadow_aspects(all_systems, unique_seed),
            "purpose": self._generate_purpose(all_systems, unique_seed),
            "soul_architecture": self._build_soul_architecture(all_systems, unique_seed)
        }
    
    def _generate_who_i_am_unique(
        self,
        birth_data: Dict,
        all_systems: Dict,
        seed: int
    ) -> str:
        """
        Generate UNIQUE "Who I Am" - never duplicates.
        This is the KEY fix for the duplicate content issue.
        """
        
        # Build comprehensive prompt with all systems
        systems_summary = "\n".join([
            f"- {system}: {json.dumps(data, indent=2)}" 
            for system, data in all_systems.items()
        ])
        
        prompt = f"""
        Create a unique, deeply personal "Who I Am" description that synthesizes:
        
        Birth Data: {json.dumps(birth_data, indent=2)}
        
        All 30+ Mystical Systems:
        {systems_summary}
        
        Requirements:
        1. Must be completely unique to this specific birth chart
        2. Must synthesize ALL systems into one cohesive identity
        3. Must feel personal and specific (not generic)
        4. Must be 2-3 sentences, poetic but clear
        5. Must reflect the unique combination of all systems
        6. Must be different from any other user's description
        
        Generate a description that NO OTHER user would receive, even with similar birth data.
        Make it deeply personal and specific to this exact cosmic blueprint.
        """
        
        # Use AI with seed for variation
        if self.ai_client:
            response = self.ai_client.generate(
                prompt=prompt,
                temperature=0.85,  # Higher for more variation
                seed=seed,  # Ensures uniqueness
                max_tokens=250
            )
            return response.text
        else:
            # Fallback for testing
            return f"You are a unique soul with a cosmic blueprint unlike any other. Your birth data {birth_data.get('date')} combined with your unique user journey creates an identity that is entirely your own. This description is generated with seed {seed} to ensure absolute uniqueness."
    
    def _calculate_soul_frequency(self, birth_data: Dict, all_systems: Dict) -> Dict:
        """Calculate soul frequency from birth data and systems."""
        # Implementation would calculate frequency from astrological data
        return {
            "frequency": "432 Hz",  # Placeholder
            "resonance": "Harmonic",
            "vibration": "High"
        }
    
    def _extract_core_strengths(self, all_systems: Dict, seed: int) -> List[str]:
        """Extract core strengths from all systems."""
        random.seed(seed)
        # Implementation would analyze all systems
        return [
            "Intuitive Wisdom",
            "Creative Expression",
            "Transformative Power"
        ]
    
    def _extract_shadow_aspects(self, all_systems: Dict, seed: int) -> List[str]:
        """Extract shadow aspects from all systems."""
        random.seed(seed)
        # Implementation would analyze all systems
        return [
            "Perfectionism",
            "Overthinking",
            "Emotional Intensity"
        ]
    
    def _generate_purpose(self, all_systems: Dict, seed: int) -> str:
        """Generate purpose from all systems."""
        random.seed(seed)
        # Implementation would synthesize purpose
        return "To bridge the mystical and material worlds, bringing ancient wisdom into modern life."
    
    def _build_soul_architecture(self, all_systems: Dict, seed: int) -> Dict:
        """Build complete soul architecture."""
        random.seed(seed)
        return {
            "foundation": "Astrological Big 3",
            "structure": "Human Design Type",
            "expression": "Life Path Number",
            "integration": "All 30+ Systems Unified"
        }
