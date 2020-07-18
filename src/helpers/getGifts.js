export const getGifts = async (category) => {
    const url = 'https://api.giphy.com/v1/gifs/search?'
    const apiKey = '5XpvRVGfKQ3ecMi7jMtUVfDEf4NoJBea'
    const response = await fetch(url + `q=${encodeURI(category)}&limit=20&api_key=${apiKey}`)
    const {data} = await response.json()

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifts;
}
