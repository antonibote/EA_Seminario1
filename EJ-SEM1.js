fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  
  .then((json) => json
  .filter((song) => song.id > 50)
  .map((song) => song.id)
  .reduce((a, b) => a + b, 0))

  .then((json) => console.log(json));

