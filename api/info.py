from fastapi import APIRouter, HTTPException
from services.info_service import fetch_pokemon_info

router = APIRouter()

@router.get("/")
def get_basic_info(name: str):
    return fetch_pokemon_info(name)

@router.get("/types")
def get_pokemon_types():
    return {"types": ["Fire", "Water", "Grass", "Electric", "Psychic"]}