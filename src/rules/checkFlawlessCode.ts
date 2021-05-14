import axios from 'axios'

// TODO Check where are declared these exported functions
export declare function markdown(message: string): void
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

const getGif = async (apiKey:string) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=lgtm&rating=g&lang=en`
  const { data } = await axios(url)
  return data.data.url
}

export const checkFlawlessCode = (apiKey:string) => {
  getGif(apiKey).then(gifUrl => {
    markdown(`Great job!! [](${gifUrl})`)
  }).catch(e => {
    message('Great job!! [](https://giphy.com/embed/11ISwbgCxEzMyY)')
  })
}
