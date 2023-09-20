fetch('https://jsonplaceholder.typicode.com/posts')

  .then( response => {
    if (!response.ok)
      throw new Error(`HTTP Error (${response.status})`)
    return response.json() 
  })

  .then((json) => json
  .filter((song) => song.id > 50)
  .map((song) => song.id)
  .reduce((a, b) => a + b, 0))
  
  .catch( err => console.log(`Error: ${err}`))
  .then((json) => console.log(json));

  //Repositorio github: git@github.com:antonibote/EA_Seminario1.git
