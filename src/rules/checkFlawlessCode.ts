import fetch from 'node-fetch'

// TODO Check how is this variabl// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

const getGif = async (apiKey:string) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=lgtm&rating=g&lang=en`
  const response = await fetch(url)
  const responseJson = await response.json()
  return responseJson.data.url
}

export const checkFlawlessCode = (apiKey:string) => {
  getGif(apiKey).then(gifUrl => {
    message(`![](${gifUrl})`)
  }).catch(e => {
    message('![](https://giphy.com/embed/11ISwbgCxEzMyY)')
  })
}
