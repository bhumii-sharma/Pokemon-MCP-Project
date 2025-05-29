from fastapi import APIRouter, HTTPException, Query
from services.compare_service import compare_pokemon_stats

router = APIRouter()

@router.get("")
def compare(one: str = Query(...), two: str = Query(...)):
    try:
        return compare_pokemon_stats(one, two)
    except HTTPException as e:
        raise e
