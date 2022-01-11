export const getGifs = async ( category ) =>{
try {
      //reemplazamos en el URL Rick+and+Morty por la category ponemos la cadena en 
    //backstick e introducimos el props
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=nSgM4qVyU8mlVk1Xs3ZeF9q3METwgQsC`;
    //const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=nSgM4qVyU8mlVk1Xs3ZeF9q3METwgQsC`;
    const resp = await fetch(url);
    const  { data } = await resp.json();
    const gifs = data.map(img =>{ 
        // barremos todas las imagenes de la data
        // para obtener los campos que querramos como sigue
            return { // estas las obtenemos de los campos del data de los arreglos
                id: img.id,
                title : img.title,
                url: img.images?.downsized_medium.url, // ponemos el signo ? para vereficar que venga la imagen y la utilize
            }
    })
    console.log(gifs);  
    return gifs;
} catch (error) {
    console.log(error);
}
      
}