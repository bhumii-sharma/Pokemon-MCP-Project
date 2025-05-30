from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Allow frontend access (React on localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow everything. Lock down in prod!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Modular Control Platform for Pokémon!"}

@app.get("/pokemon/{name}")
async def get_pokemon(name: str):
    url = f"https://pokeapi.co/api/v2/pokemon/{name.lower()}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)

    if response.status_code != 200:
        raise HTTPException(status_code=404, detail="Pokémon not found")

    data = response.json()

    # Cleaned structure
    result = {
        "name": data["name"],
        "types": [t["type"]["name"] for t in data["types"]],
        "abilities": [a["ability"]["name"] for a in data["abilities"]],
        "base_experience": data["base_experience"],
        "height": data["height"],
        "weight": data["weight"],
        "sprite": data["sprites"]["front_default"],
    }

    return result
