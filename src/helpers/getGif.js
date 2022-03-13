

const getGif = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=uB1wO9iHFaxxT072p2wa1WF6lFiukJMF`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )

    return gifs;


}

export default getGif;



