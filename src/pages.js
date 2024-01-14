import fs from 'fs';
import path from 'node:path';
const navbar = fs.readFileSync('./partials/navbar.html', 'utf8');
const meta = fs.readFileSync('./partials/meta.html', 'utf8');

const sendFixedData = (data) => {
    // replacing partials
    data = data.replace("{{navbar}}", navbar);
    data = data.replace("</head>", meta + '\n</head>');
    // returning the data
    return data;
}

const pageRoutes = (app) => {
    app.get("/", (req, res) => {
        let data = fs.readFileSync('../pages/index.html', 'utf8');
        res.send(sendFixedData(data));
    })

    app.get("/search", (req, res) => {
        if (__dirname.endsWith('src')) {
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
        if (__dirname.endsWith('src')) {
            let data = fs.readFileSync(path.resolve(path.join(__dirname, '../games/search.html')), 'utf8');
            res.send(sendFixedData(data));
            return;
        } else {
            let data = fs.readFileSync('./pages/games.html', 'utf8');
            res.send(sendFixedData(data));
            return;
        }
    })

    app.get("/frame", (req, res) => {
        if (__dirname.endsWith('src')) {
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
        if (__dirname.endsWith('src')) {
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