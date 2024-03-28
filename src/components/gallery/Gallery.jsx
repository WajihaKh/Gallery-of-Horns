/* eslint-disable react/prop-types */
import React from 'react';
import HornedBeast from '../HornedBeast';
import './gallery.css';
// import data from '../../data.json';


const Gallery = ({data, handleBeastSelect}) => {
    return (
        <div className="HornedBeast">
          {data.map((beast, index) => (
            <HornedBeast
               key={index}
               title={beast.title}
               image_url={beast.image_url} 
               description= {beast.description}
               handleBeastSelect = {handleBeastSelect}
              //  onSelect={() => onSelect(beast)}
            />
          ))}
        </div>
  );
};



export default Gallery;