import fs from 'fs';
import url from 'node:url';
import path from 'node:path';
import cors from 'cors';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const apiRoutes = (app) => {
    app.get("/api/games", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            res.contentType('text/javascript');
            res.sendFile(path.resolve(path.join(__dirname, '../public/js/games.js')));
        } else {
            res.contentType('text/javascript');
            res.sendFile(path.resolve(path.join(__dirname, './public/js/games.js')));
        }
    });

    app.get("/api/changelog", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            res.sendFile(path.resolve(path.join(__dirname, '../public/json/changelog.json')));
        } else {
            res.sendFile(path.resolve(path.join(__dirname, './public/json/changelog.json')));
        }
    });
}

export default apiRoutes;