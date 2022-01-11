import React,{ useState } from 'react';
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

//const categories = ['One Punch','Samaurai X', 'Dragon Ball'];
const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
       //setCategories([...categories, 'HunterXHunter']);
       setCategories( cats =>[...categories, 'HunterXHunter']);
       //copiamos el arreglo y anexamos un registro
    }

    return (
        <>
            <h2> GifExpertApps </h2>
            <Addcategory setCategories = { setCategories } />
            <hr/>
               <ol>
                 { 
                    categories.map( category => (
                        //<li key = {category }> {category} </li>
                      <GifGrid 
                      key = {category } 
                      category = { category }
                    />
                    ))
                }
            </ol>
        </>

    );
}
export default GifExpertApp;


