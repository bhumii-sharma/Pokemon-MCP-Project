from fastapi import HTTPException
from external.pokeapi_client import get_pokemon_info

def fetch_pokemon_info(name: str) -> dict:
    """
    Fetches detailed information about a specific Pokémon.
    """
    info = get_pokemon_info(name)
    if not info:
        raise HTTPException(status_code=404, detail=f"Pokémon '{name}' not found.")
    return info


