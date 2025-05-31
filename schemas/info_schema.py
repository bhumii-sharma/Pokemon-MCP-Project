from pydantic import BaseModel
from typing import List, Optional

class PokemonBase(BaseModel):
    name: str
    pokedex_id: int
    types: List[str]

class Pokemon(PokemonBase):
    id: int

    class Config:
        orm_mode = True
