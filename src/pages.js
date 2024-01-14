import fs from 'fs';
import url from 'node:url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import path from 'node:path';

let navbar;
let meta;

if (__dirname.endsWith('src\\')) {
    navbar = fs.readFileSync(path.resolve(path.join(__dirname, '../partials/navbar.html')), 'utf8');
    meta = fs.readFileSync(path.resolve(path.join(__dirname, '../partials/meta.html')), 'utf8');
    const configJS = JSON.parse(fs.readFileSync(path.resolve(path.join(__dirname, '../radiation.config.json')), 'utf8'));
} else {
    navbar = fs.readFileSync('./partials/navbar.html', 'utf8');
    meta = fs.readFileSync('./partials/meta.html', 'utf8');
    const configJS = JSON.parse(fs.readFileSync('./radiation.config.json', 'utf8'));
}


const sendFixedData = (data) => {
    // replacing partials
    data = data.replace("{{navbar}}", navbar);
    data = data.replace("</head>", meta + '\n</head>');
    // returning the data
    return data;
}

const pageRoutes = (app) => {
    app.get("/", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../pages/index.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        } else {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../pages/index.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        }
    })

    app.get("/search", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../pages/search.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        } else {
            let data = fs.readFileSync('./pages/search.html', 'utf8');
            res.send(sendFixedData(data));
            return;
        }
    })

    app.get("/games", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../pages/games.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        } else {
            let data = fs.readFileSync('./pages/games.html', 'utf8');
            res.send(sendFixedData(data));
            return;
        }
    })

    app.get("/frame", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../pages/frame.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        } else {
            let data = fs.readFileSync('./pages/frame.html', 'utf8');
            res.send(sendFixedData(data));
            return;
        }
    })

    app.get("/apps", (req, res) => {
        if (__dirname.endsWith('src\\')) {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../pages/apps.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        } else {
            let data = fs.readFileSync('./pages/apps.html', 'utf8');
            res.send(sendFixedData(data));
            return;
        }
    })
};

export default pageRoutes;