import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornedBeast({title, image_url, description}) {

    const [count, setCount] = useState(0);

    const addCount = () => setCount(count +1);
 
    return (
        <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {image_url} alt= {title}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button onClick ={addCount} variant="primary">❤️ : {count}</Button>
          </Card.Body>
        </Card>
        </>
      );
}

export default HornedBeast;