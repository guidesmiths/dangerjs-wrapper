import fetch from 'node-fetch'

// TODO Check how is this variabl// TODO Check where are declared these exported functions
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void

const getGif = async (apiKey:string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=lgtm&limit=25&offset=0&rating=g&lang=en`
  const response = await fetch(url)
  const responseJson = await response.json()
  return responseJson.data[0].embed_url
}

export const checkFlawlessCode = async (apiKey:string) => {
  const gifUrl = getGif(apiKey).then(() => {
    message(`![](${gifUrl})`)
  }).catch(e => {
    const gif = 'https://giphy.com/gifs/3o7abonV6K9irq7kaY'
    console.log(gif)
    message(`![](${gif})`)
  })
}
