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

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  .then(response => {
    if (response.ok){
      return response.json()
    } else {
      throw Error
    }
  })
  .catch(error => {
    return "Uh oh! This record is scratched. Please try again"
  })
}
