# 🧠 Development of an MCP Server Utilizing the Open Pokémon API

## 🎯 Objective
Design and implement an **MCP (Modular Control Platform)** server that serves as a middleware between AI agents and the Open Pokémon API. It exposes modular endpoints to retrieve, compare, and reason about Pokémon data. A one-page web application is built for interactive testing, and a demo video showcases its full functionality.

---

## 🧩 Features

### ✅ MCP Server (FastAPI)
- Modular design for extensibility
- Fetches structured data from the Open Pokémon API: https://pokeapi.co/
- RESTful endpoints for:
  - Pokémon Info Lookup
  - Attribute Comparison
  - Counter Strategy Suggestions
  - Team Generation from descriptions

### ✅ Modular Components
1. **Information Retrieval Module**  
   Abstracts raw data from PokéAPI into a clean format.

2. **Comparison Module**  
   Compares base stats, types, abilities between two Pokémon.

3. **Strategy Module**  
   Suggests counters based on type weaknesses and coverage.

4. **Team Composition Module**  
   Accepts natural-language input like “balanced team with a tank” and generates a team of 6 Pokémon.

### ✅ Frontend Web Interface
- Built with **React** and **Tailwind CSS**
- Single-page app with:
  - 🔍 Pokémon Search
  - ⚖️ Comparison Tool
  - 🛡️ Counter Suggestions
  - 🧬 Team Builder

### ✅ AI-Agent Abstraction
- Simplified REST endpoints to be consumed by intelligent agents.
- No direct PokéAPI interaction required by the agent.

### ✅ Logging & Testing
- Logs all incoming requests with errors and performance metrics.
- Includes automated unit tests and integration tests for key modules.

---


## 2. Backend Setup (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload


## 3. Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


---

🤝 Contributors
Your Name – @yourusername

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Pokemon-MCP-Project.git
cd Pokemon-MCP-Project
