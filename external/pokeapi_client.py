# external/pokeapi_client.py

import requests
import logging
from fastapi import HTTPException

# Set up logger
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

POKEAPI_BASE_URL = "https://pokeapi.co/api/v2"

def fetch_all_pokemon(limit: int = 300) -> list[str]:
    """Fetches a list of Pokémon names up to the specified limit."""
    try:
        logger.info(f"Fetching list of {limit} Pokémon from PokeAPI")
        response = requests.get(f"{POKEAPI_BASE_URL}/pokemon?limit={limit}", timeout=5)
        response.raise_for_status()
        results = response.json().get("results", [])
        if not results:
            logger.error("Empty Pokémon list received from PokeAPI")
            raise HTTPException(status_code=502, detail="Empty Pokémon list received.")
        return [p["name"] for p in results]
    except requests.RequestException as e:
        logger.error(f"Error fetching Pokémon list: {e}")
        raise HTTPException(status_code=502, detail=f"Error fetching Pokémon list: {str(e)}")

def get_pokemon_info(name: str) -> dict:
    """Fetches detailed info for a single Pokémon."""
    try:
        logger.info(f"Fetching info for Pokémon: {name}")
        response = requests.get(f"{POKEAPI_BASE_URL}/pokemon/{name.lower()}", timeout=5)
        response.raise_for_status()
        data = response.json()
        return {
            "name": data["name"],
            "types": [t["type"]["name"] for t in data["types"]],
            "stats": {s["stat"]["name"]: s["base_stat"] for s in data["stats"]},
            "sprite": data["sprites"]["front_default"],
        }
    except requests.HTTPError as e:
        logger.warning(f"Pokémon not found: {name}")
        raise HTTPException(status_code=404, detail=f"Pokémon '{name}' not found.")
    except requests.RequestException as e:
        logger.error(f"Error fetching Pokémon info for {name}: {e}")
        raise HTTPException(status_code=502, detail=f"Error fetching Pokémon info: {str(e)}")
