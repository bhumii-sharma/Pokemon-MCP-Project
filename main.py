from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import pokemon_routes  # Make sure this exists!
import uvicorn


app = FastAPI()

app.include_router(pokemon_routes.router, prefix="/pokemon")


# Allow React frontend to access the API
origins = [
    "http://localhost:5173",  # Vite dev server
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional welcome message at "/"
@app.get("/")
def read_root():
    return {"message": "Welcome to the Pokémon API"}


# If you want to run it as `python main.py`
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
