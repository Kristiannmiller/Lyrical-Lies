export const getSuggestions = (input) => {
  return fetch(`https://api.lyrics.ovh/suggest/${input}`)
  .then(response => {
    if (response.ok){
      return response.json()
    } else {
      throw Error
    }
  })
  .catch(error => {
    return "No songs match that search. Please try again"
  })
}
