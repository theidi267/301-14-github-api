const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const speragent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

app.get('/github/*', (req, res) => {

  console.log('this sucks routing to github');
  const url = `https://api.github.com/${request.params[0]}`;
  superagent.get(url)
    .set('Authorization', process.env.GITHUB_TOKEN)
    .then( repos => res.send(repos))
    .catch(error => console.log(error.message))
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
