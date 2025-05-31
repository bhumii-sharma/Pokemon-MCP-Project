from fastapi import APIRouter

router = APIRouter()

@router.post("/suggest")
def ai_suggest_move(pokemon: str, opponent: str):
    return {
        "pokemon": pokemon,
        "opponent": opponent,
        "suggested_move": "Thunderbolt" if pokemon.lower() == "pikachu" else "Tackle"
    }
