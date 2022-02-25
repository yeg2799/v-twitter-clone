const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 80;
const config = require('../nuxt.config.js');
const app = express();

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

app.set('port', port);

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
