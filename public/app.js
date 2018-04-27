
$.get('/github/user/repos')
  .then(data => console.log(JSON.parse(data.text)))
  .catch(error => console.log(error.message))