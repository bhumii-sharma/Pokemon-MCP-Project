# api/pokemon_routes.py

from fastapi import APIRouter
from . import info, compare, team, agent
from services.info_service import fetch_pokemon_info


router = APIRouter()

# Include all sub-routers
router.include_router(info.router, tags=["Info"])
router.include_router(compare.router, tags=["Compare"])
router.include_router(team.router, tags=["Team"])
router.include_router(agent.router, tags=["Agent"])


#