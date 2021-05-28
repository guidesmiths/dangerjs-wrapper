import axios from 'axios'
import { DangerConfig } from '../models/DangerConfig'

// TODO Check where are declared these exported functions
export declare function markdown(message: string): void
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

const getGif = async (apiKey:string) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=lgtm&rating=g&lang=en`
  const { data } = await axios(url)
  return data.data.image_original_url
}

export const checkFlawlessCode = (dangerConfig:DangerConfig) => {
  const { giphyApiKey } = dangerConfig
  getGif(giphyApiKey).then(gifUrl => {
    message(`![](${gifUrl})`)
  }).catch(e => {
    message('![](https://media.giphy.com/media/11ISwbgCxEzMyY/source.gif)')
  })
}
