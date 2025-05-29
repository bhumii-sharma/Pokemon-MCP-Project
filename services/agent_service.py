from external.pokeapi_client import get_pokemon_info, fetch_all_pokemon
from fastapi import HTTPException
import random

def get_agent_friendly_data(name: str) -> dict:
    info = get_pokemon_info(name)
    if not info:
        raise HTTPException(status_code=404, detail="Invalid Pokémon")
    
    return {
        "name": info["name"],
        "types": info["types"],
        "stats": info["stats"]
    }

def get_random_pokemon_for_agent(limit: int = 5) -> list:
    pool = fetch_all_pokemon(limit=300)
    random.shuffle(pool)
    return [get_agent_friendly_data(name) for name in pool[:limit]]
