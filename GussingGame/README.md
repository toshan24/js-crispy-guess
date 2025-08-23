Number Guessing Game

What I changed
- Split the single `index.html` into three files:
  - `index.html` — page structure; now contains a small in-page UI.
  - `style.css` — moved styles here.
  - `script.js` — game logic, now DOM-based (no prompt/alert loop).

How to run (quick)
1. Open this folder in VS Code.
2. Install the Live Server extension (search "Live Server").
3. Right-click `index.html` -> "Open with Live Server" (or click "Go Live").
4. Make edits to `style.css` or `script.js`, save, and the page will reload automatically.

Why Node is not required
- This project is static (HTML/CSS/vanilla JS) and runs in the browser. Node is only needed for server-side code or tooling (bundlers, frameworks).

Possible enhancements
- Replace random number range input so players can choose difficulty.
- Add a scoreboard to persist best attempts (localStorage).
- Add animations and nicer styling.
- Add sound effects for win/lose events.
- Add validation messages and accessibility improvements.
- Build a web-pack/Vite setup if you want module-based JS and fast dev server without VS Code extension.

Files
- `index.html` — main page
- `style.css` — styles
- `script.js` — game logic

If you want, I can:
- Add localStorage-based high score tracking.
- Add difficulty selection (easy/medium/hard).
- Add tests or convert to a small npm project with Vite for hot-module-replacement.

Tell me which enhancement you'd like next.
