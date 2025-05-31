from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def compare_pokemons(pokemon1: str, pokemon2: str):
    return {
        "comparison": {
            "pokemon1": pokemon1,
            "pokemon2": pokemon2,
            "winner": pokemon1 if len(pokemon1) > len(pokemon2) else pokemon2
        }
    }
