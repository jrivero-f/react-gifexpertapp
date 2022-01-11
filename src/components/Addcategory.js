import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const Addcategory = ( props ) => {

    const [inputValue, setInputValue] = useState('');
    const { setCategories } = props;
      
    //console.log(setCategories);

const handleInputChange = (e)=> {
    setInputValue(e.target.value);
    //console.log(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2 ){
        //console.log('Submit Hecho')
        setCategories(cats => [inputValue,...cats]);
        setInputValue('');
    }
    }
    

    return (
        <form onSubmit={ handleSubmit }>
            <h1>{ inputValue }</h1>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
        </form>
    )
}

Addcategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}