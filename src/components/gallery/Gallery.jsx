/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import HornedBeast from '../HornedBeast';
import './gallery.css';
// import data from '../../data.json';


const Gallery = ({filteredData, handleBeastSelect, voteForBeast}) => {

    return (
        <div className="HornedBeast">
          {filteredData.map((beast, index) => (
            <HornedBeast
               key={index}
               title={beast.title}
               image_url={beast.image_url} 
               description= {beast.description}
               votes= {beast.votes}
               handleBeastSelect = {handleBeastSelect}
               filteredData = {filteredData}
               voteForBeast = {voteForBeast}
            />
          ))}
        </div>
  );
};



export default Gallery;