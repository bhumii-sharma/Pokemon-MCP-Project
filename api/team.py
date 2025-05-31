from fastapi import APIRouter

router = APIRouter()

@router.post("/generate")
def generate_team(strategy: str = "balanced"):
    return {
        "strategy": strategy,
        "team": ["Pikachu", "Charizard", "Squirtle", "Bulbasaur", "Gengar", "Alakazam"]
    }
