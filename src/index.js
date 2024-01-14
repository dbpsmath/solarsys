// importing modules.
import Easyviolet from 'easyviolet';
import express from 'express';
import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';
import mime from 'mime';
import fetch from 'node-fetch';
import pageRoutes from './pages.js';
// this __dirname value will be used later
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import apiRoutes from './api.js';
import cors from 'cors';
// reading the config file and taking partials.

if (__dirname.endsWith('src')) {
  const configJS = JSON.parse(fs.readFileSync(path.resolve(path.join(__dirname, '../config.json')), 'utf8'));
  const navbar = fs.readFileSync(path.resolve(path.join(__dirname, '../partials/navbar.html')), 'utf8');
  const meta = fs.readFileSync(path.resolve(path.join(__dirname, '../partials/meta.html')), 'utf8');
} else {
  const configJS = JSON.parse(fs.readFileSync('./radiation.config.json', 'utf8'));
  const navbar = fs.readFileSync('./partials/navbar.html', 'utf8');
  const meta = fs.readFileSync('./partials/meta.html', 'utf8');
}



// creating the express app.
const app = express();

// setting the view engine to html.
app.set('view engine', 'html');

// making the ultraviolet instance
const ultraviolet = new Easyviolet({
  codec: configJS.codec
});

pageRoutes(app);
apiRoutes(app);

app.use(express.static(path.join(path.resolve(__dirname, '../public/'))));
app.use(cors())

app.get('/cdn', (req, res) => {
  res.send('test');
});

app.get('/cdn/*', cors({
  origin: false
}), async (req, res, next) => {
  // cdn stuff taken from skoolgq/polaris, i couldnt get a working version of a rawgithubusercontent proxy with correct cors so i just copied it
  let reqTarget = `https://raw.githubusercontent.com/dbpsmath/solarsys-assets/main/${req.path.replace('/cdn/', '')}`;

  const asset = await fetch(reqTarget);
  if (asset.status == 200) {
    var data = Buffer.from(await asset.arrayBuffer());


    const noRewrite = ['.unityweb'];
    if (!noRewrite.includes(mime.getType(reqTarget))) res.writeHead(200, {
      'content-type': mime.getType(reqTarget)
    });

    if (mime.getType(reqTarget) === 'text/html') data = data + '<script src=\'/assets/js/cdn.inject.js\' preload=\'true\'></script>';

    res.end(data);
  } else next();
});

app.use((req, res) => {
  if (!ultraviolet.requiresRoute(req)) {
    res.status(404).sendFile(path.join(path.resolve(__dirname, "../public/templates/404.html")));
  }
});

const server = app.listen(process.env.PORT || configJS.port, () => {
  console.log(`Your server is running on port ${server.address().port || process.env.PORT}, using NodeJS version ${process.version}`);
});

ultraviolet.httpServer(server);