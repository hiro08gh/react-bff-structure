import * as Express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import { StaticRouter } from 'react-router-dom';

const app = Express();

app.use(Express.static('public'));

app.get('*', (req, res) => {
  const context = {};
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
      </head>
      <body>
        <div id="root">${renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>,
        )}</div>
        <script src="./bundle.js" defer></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening:3000');
});
