from fastapi import APIRouter, HTTPException
from services.info_service import get_pokemon_info

router = APIRouter()

@router.get("/{name}")
def get_info(name: str):
    try:
        return get_pokemon_info(name)
    except HTTPException as e:
        raise e
