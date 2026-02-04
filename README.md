# www.lava-ops.de

Statische Website für LavaOps (Landing Page, Impressum, Kontakt, FAQ, AGB, Datenschutz).

- **Landing:** Eine lange Seite mit Hero, Feature-Blöcken (je mit Carousel) und Tarif-Sektion. Header: Registrieren/Anmelden → app.lava-ops.de.
- **Subpages:** Impressum, Kontakt, FAQ, AGB, Datenschutz (nur Deutsch).
- **Hosting:** Für GitHub Pages geeignet. Repo: https://github.com/draoZA/www-lava-ops/

## Lokal ansehen

Einfach die HTML-Dateien im Browser öffnen oder einen lokalen Server starten, z. B.:

```bash
npx serve .
# oder
python -m http.server 8000
```

Dann z. B. http://localhost:3000 bzw. http://localhost:8000 aufrufen.

## Bilder ersetzen

Die Feature-Blöcke nutzen Platzhalter (farbige Flächen mit Beschriftung). Echte Bilder: In `index.html` die `<div class="img-placeholder">` durch echte `<img src="img/feature-xy.jpg" alt="…">` ersetzen und die Bilder in einen Ordner `img/` legen.

## GitHub Pages

1. Repo auf GitHub pushen.
2. Settings → Pages → Source: Deploy from branch.
3. Branch: z. B. `main` oder `master`, Ordner: `/ (root)`.
4. Optional: Custom Domain `www.lava-ops.de` in den Pages-Einstellungen eintragen und DNS wie von GitHub angegeben konfigurieren.
