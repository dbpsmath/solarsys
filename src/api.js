import fs from 'fs';
import url from 'node:url';
import path from 'node:path';
const navbar = fs.readFileSync('./partials/navbar.html', 'utf8');
const meta = fs.readFileSync('./partials/meta.html', 'utf8');
import cors from 'cors';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const apiRoutes = (app) => {
    app.get("/api/games", (req, res) => {
        res.sendFile(path.resolve(path.join(__dirname, '../public/js/games.js')));
    });
    app.get("/api/changelog", (req, res) => {
        res.sendFile(path.resolve(path.join(__dirname, '../public/json/changelog.json')));
    });
};

export default apiRoutes;