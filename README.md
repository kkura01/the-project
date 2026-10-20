# the-project

API, worker, and the Vite app live in this repo.

AI-assisted changes are recorded in Git. Chat checkpoints are a convenience; commits are the history.

## Run

Docker Compose starts the API and Postgres with the defaults in `.env.example`. Copy that file to `.env` only when you need to override them.

```powershell
docker compose up --build api db frontend
```

`GET http://localhost:8000/health` returns `{"status":"ok"}`. The home page at `http://localhost:5173/` shows that status.

`docker compose up` also starts Redis and MinIO. MinIO listens on port 9000, and its console listens on port 9001.

## Tests

From `backend/`:

```powershell
py -m venv .venv
.venv\Scripts\python -m pip install -e ".[dev]"
.venv\Scripts\pytest
```

## Lint

From `backend/`, after the dev extra is installed:

```powershell
.venv\Scripts\ruff check
```

## Layout

- `backend/app/main.py` — process entry and `GET /health`
- `backend/app/core/` — shared infrastructure
- `backend/app/modules/` — one package per feature
- `docker-compose.yml` — `api`, `db` (`postgres:16`), `redis`, `minio`

Naming for those paths is in `.cursor/rules/naming.mdc`.

## Git

- `.cursor/rules/` holds the commit message format, the small-commit practice, and naming.
- `prompts/` holds reusable prompts. Reference one in chat, for example `@prompts/feature-breakdown.md`.

Break a feature into microtasks before coding it. Each commit should cover one logical change, usually a few files, so a bad step can be reviewed and reverted on its own.
