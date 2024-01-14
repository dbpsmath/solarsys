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
        let data = fs.readFileSync('./pages/index.html', 'utf8');
        res.send(sendFixedData(data));
    })

    app.get("/search", (req, res) => {
        let data = fs.readFileSync('./pages/search.html', 'utf8');
        res.send(sendFixedData(data));
    })

    app.get("/games", (req, res) => {
        let data = fs.readFileSync('./pages/games.html', 'utf8');
        res.send(sendFixedData(data));
    })

    app.get("/frame", (req, res) => {
        let data = fs.readFileSync('./pages/frame.html', 'utf8');
        res.send(sendFixedData(data));
    })

    app.get("/apps", (req, res) => {
        let data = fs.readFileSync('./pages/apps.html', 'utf8');
        res.send(sendFixedData(data));
    })

    app.get("/appFrame", (req, res) => {
        let data = fs.readFileSync('./pages/appFrame.html', 'utf8');
        res.send(sendFixedData(data));
    })
};

export default pageRoutes;