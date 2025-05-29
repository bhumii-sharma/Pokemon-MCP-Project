from pydantic import BaseModel
from typing import List

class PokemonComparisonRequest(BaseModel):
    pokemon_names: List[str]  # e.g., ["pikachu", "charizard"]

class ComparisonResult(BaseModel):
    better_pokemon: str
    reason: str
