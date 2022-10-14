import React from 'react';
import {PromisesimageData} from 'react';

const Promisesslider = () => {
    // return <PromisesimagesData />   
    return (
        
    {PromisesimageData.map((slide, index) => {
        return (<img src={slide.image} alt={slide.alt}></img>) 
    })}
    
    );
};

export default Promisesslider;