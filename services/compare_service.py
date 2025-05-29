from external.pokeapi_client import get_pokemon_info
from fastapi import HTTPException

def compare_pokemon_stats(name1: str, name2: str) -> dict:
    try:
        p1 = get_pokemon_info(name1)
        p2 = get_pokemon_info(name2)
    except HTTPException as e:
        raise e

    stats1 = p1["stats"]
    stats2 = p2["stats"]

    comparison = {}
    for stat in stats1:
        if stat in stats2:
            comparison[stat] = {
                name1: stats1[stat],
                name2: stats2[stat],
                "better": name1 if stats1[stat] > stats2[stat] else name2
            }

    return {
        "pokemon_1": p1["name"],
        "pokemon_2": p2["name"],
        "comparison": comparison
    }
