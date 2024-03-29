import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornedBeast({title, image_url, description, handleBeastSelect, filteredData, votes, voteForBeast}) {

    const [allBeast, setAllBeast] = useState(null);

    const addCount = (hornedBeastTitle) => {
      console.log('hornedBeastTitle', hornedBeastTitle)
      voteForBeast(hornedBeastTitle);
    };

    const handleClick = () => {
      handleBeastSelect(title);
    }
    return (
        <>
        <Card style={{ width: '18rem' }}>
          <Button onClick ={handleClick} variant="info">Select</Button>
          <Card.Img variant="top" src= {image_url} alt= {title}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button onClick ={() => addCount(title)} variant="primary">❤️ : {votes}</Button>
          </Card.Body>
        </Card>
        </>
      );
}

export default HornedBeast;