import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category ); // destructuramos el state
 // renombrar data a images
    /*    const [images, setImages] = useState([]);

   useEffect(()=>{
        getGifs( category ) // mandamos a traer el componente y le pasamos los props
        //.then( setImages );
        .then(imgs => setImages(imgs)); // este componente getGifs regresa una promesa y la recibimos en setImages
    },[ category ]); // entre corchete incluimos el props para que se renderice
*/
    
    return (
        <>
            <h3 className="animate_animated animate__fadeIn"> { category } </h3>
            
    { loading && <p className="animate_animated animate__flash">Loading</p> }
      
        {/*loading && <p>Loading </p>} // si esto loading es true ejecuta el <p></p>*/}

      <div className='card-grid' >
            {
            images.map( img =>(
            <GifGridItem 
            key = {img.id}
            {...img}
       //     {...img} // mandamos las propiedades de forma individual
            />
              ))
           }
            </div>
            </>
    )
}
