import random
from fastapi import HTTPException
from external.pokeapi_client import fetch_all_pokemon, get_pokemon_info

def generate_balanced_team(description: str) -> list:
    keywords = description.lower().split()
    pokemon_pool = fetch_all_pokemon(limit=200)
    random.shuffle(pokemon_pool)

    team = []
    added_types = set()

    for name in pokemon_pool:
        info = get_pokemon_info(name)
        if not info:
            continue

        if "fire" in keywords and "fire" in info["types"] and "fire" not in added_types:
            team.append(info)
            added_types.add("fire")
        elif "defense" in keywords and info["stats"]["defense"] > 80:
            team.append(info)
        elif "attack" in keywords and info["stats"]["attack"] > 80:
            team.append(info)
        elif len(team) < 6:
            team.append(info)

        if len(team) == 6:
            break

    if len(team) < 6:
        raise HTTPException(status_code=500, detail="Couldn't generate a complete team.")

    return team
