import requests
from fastapi import HTTPException

POKEAPI_BASE_URL = "https://pokeapi.co/api/v2"

def fetch_all_pokemon(limit: int = 300) -> list[str]:
    """Fetches a list of Pokémon names up to the specified limit."""
    try:
        response = requests.get(f"{POKEAPI_BASE_URL}/pokemon?limit={limit}")
        response.raise_for_status()
        return [p["name"] for p in response.json()["results"]]
    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"Error fetching Pokémon list: {str(e)}")

def get_pokemon_info(name: str) -> dict:
    """Fetches detailed info for a single Pokémon."""
    try:
        response = requests.get(f"{POKEAPI_BASE_URL}/pokemon/{name.lower()}")
        response.raise_for_status()
        data = response.json()
        return {
            "name": data["name"],
            "types": [t["type"]["name"] for t in data["types"]],
            "stats": {s["stat"]["name"]: s["base_stat"] for s in data["stats"]},
            "sprite": data["sprites"]["front_default"],
        }
    except requests.RequestException:
        return None  # Fails silently and allows retry loop in team logic
