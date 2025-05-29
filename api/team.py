from fastapi import APIRouter, Query
from services.team_service import generate_balanced_team

router = APIRouter()

@router.get("/team")
def generate(description: str = Query(..., description="Team description")):
    return generate_balanced_team(description)
