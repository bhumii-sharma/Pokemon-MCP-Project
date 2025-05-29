from fastapi import FastAPI
from api.info import router as info_router
from api.compare import router as compare_router
from api.team import router as team_router
from api.agent import router as agent_router

app = FastAPI(title="MCP Pokémon Server")

# Attach routers
app.include_router(info_router, prefix="/pokemon", tags=["Info"])
app.include_router(compare_router, prefix="/compare", tags=["Compare"])
app.include_router(team_router, prefix="/team", tags=["Team"])
app.include_router(agent_router, prefix="/agent", tags=["Agent"])

@app.get("/")
def root():
    return {"message": "Welcome to the Modular Control Platform for Pokémon!"}
