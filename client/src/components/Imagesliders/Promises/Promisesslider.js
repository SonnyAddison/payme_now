import React from 'react';
import PromisesimageData from './PromisesimageData';

const Promisesslider = () => {
    // return <PromisesimagesData />   
    return (
    <>
    {PromisesimageData.map((slide, index) => {
        return (<img src={slide.images} alt={slide.alt}></img>) 
    })}
    </>
    );
};

export default Promisesslider;