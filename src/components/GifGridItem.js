import React from 'react'

export const GifGridItem = ( { id, title, url } ) => { // destructuramos el props
//        console.log({ id, title, url })
    return (
        <div className ='card animate__animated animate__flasadeIn'>
            <img src = { url } alt = { title } />
            <p> { title } </p>
       </div>
    )
}
