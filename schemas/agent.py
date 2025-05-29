from pydantic import BaseModel
from typing import List

class AgentConfig(BaseModel):
    name: str
    strategy: str  # e.g., "aggressive", "defensive"

class AgentAction(BaseModel):
    pokemon_id: int
    move: str
    target_id: int
