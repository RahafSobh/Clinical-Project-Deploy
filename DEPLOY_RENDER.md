# CPAS deployment on Render

## 1. Push these changes to GitHub
Use the existing repository. Do not create a second repository unless you want to.

## 2. Deploy the backend first
In Render: New -> Web Service -> connect the GitHub repository.

Settings:
- Runtime: Python
- Build command: `pip install -r requirements.txt`
- Start command: `uvicorn backend:app --host 0.0.0.0 --port $PORT`
- Health check path: `/health`

Environment variables:
- `OPENROUTER_API_KEY` = your real OpenRouter key
- `OPENROUTER_MODEL` = `openrouter/auto`
- `ALLOWED_ORIGINS` = `*` initially

After deployment, copy the backend URL, for example:
`https://cpas-api.onrender.com`

Test:
- Open `https://YOUR-BACKEND.onrender.com/health`
- It should return `{"status":"ok"}`.

## 3. Deploy the frontend
In Render: New -> Static Site -> connect the same GitHub repository.

Settings:
- Build command: `npm install && npm run build`
- Publish directory: `dist`

Environment variable:
- `VITE_API_BASE_URL` = the exact backend URL from step 2, with `https://`

Add a rewrite rule for React Router if Render did not apply render.yaml automatically:
- Source: `/*`
- Destination: `/index.html`
- Action: Rewrite

## 4. Final check
Open the frontend Render URL and test:
1. Login / patient registry
2. Add or open a patient/admission
3. Run prediction
4. Ask AI
5. Refresh while on `/patients` and `/ask-ai` to verify routing works

## Notes
- Firebase browser configuration is intentionally client-side configuration; Firestore security is controlled by Firebase Security Rules.
- The OpenRouter key must only be stored on the Render backend, never in Vite variables.
- The old Cloudflare tunnel URL is no longer used by the frontend.
