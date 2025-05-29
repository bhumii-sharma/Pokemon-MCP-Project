# api/agent.py

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from services.agent_service import get_agent_friendly_data, get_random_pokemon_for_agent

router = APIRouter(prefix="/agent", tags=["Agent"])

class AgentCommand(BaseModel):
    prompt: str

@router.post("/command")
def run_agent_command(command: AgentCommand):
    prompt = command.prompt.lower().strip()

    if prompt == "random":
        return {"response": get_random_pokemon_for_agent()}
    elif prompt.startswith("info "):
        pokemon_name = prompt[5:].strip()
        return {"response": get_agent_friendly_data(pokemon_name)}
    else:
        raise HTTPException(status_code=400, detail="Unknown command. Use 'random' or 'info <pokemon>'")
