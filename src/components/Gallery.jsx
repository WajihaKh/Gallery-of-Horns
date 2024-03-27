import React from 'react';
import HornedBeast from './HornedBeast';
import '../gallery.css';
import data from '../data.json';


const Gallery = () => {
    return (
        <div className="HornedBeast">
          {data.map((beast, index) => (
            <HornedBeast
               key={index}
               title={beast.title}
               image_url={beast.image_url} 
               description= {beast.description}
            />
          ))}
        </div>
  );
};



export default Gallery;