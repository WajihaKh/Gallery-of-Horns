/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import HornedBeast from '../HornedBeast';
import './gallery.css';
// import data from '../../data.json';


const Gallery = ({filteredData, handleBeastSelect, }) => {
  // const [filterByHorns, setFilterByHorns] = useState('all');
    return (
        <div className="HornedBeast">
          {filteredData.map((beast, index) => (
            <HornedBeast
               key={index}
               title={beast.title}
               image_url={beast.image_url} 
               description= {beast.description}
               handleBeastSelect = {handleBeastSelect}
               
            />
          ))}
        </div>
  );
};



export default Gallery;