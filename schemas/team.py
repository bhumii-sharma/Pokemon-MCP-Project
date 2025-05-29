from pydantic import BaseModel
from typing import List

class TeamCreate(BaseModel):
    name: str
    pokemon_ids: List[int]  # or pokedex_ids

class Team(BaseModel):
    id: int
    name: str
    pokemon_ids: List[int]

    class Config:
        orm_mode = True
