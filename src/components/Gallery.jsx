import { useState } from 'react';
import '../gallery.css';

function Gallery() {
    const [count, setCount] = useState(0);
  
    let alpine = {
      title: "Alpine Ibex",
      image: 'https://i.pinimg.com/564x/74/77/6f/74776f5c4f028aa816621774741ded84.jpg',
      description: 'The Alpine ibex is a wild goat found in the European Alps. Known for their climbing skills, they have curved horns and a camouflaging coat. They feed on alpine vegetation and inhabit high-altitude areas, symbolizing the rugged wilderness of the Alps.'
    };
  
    let gazelles = {
      title: "Gazelles",
      image: 'https://i.pinimg.com/564x/b0/b2/e7/b0b2e7f845f3dcb8ae6ffa4fb090bc14.jpg',
      description: 'Gazelles are slender antelopes found in Africa and Asia, known for their graceful movements, distinctive horns, and social behavior. They have tan coats with white markings, large eyes for spotting predators, and long, curved horns used for defense. Gazelles are herbivores, feeding on grasses and shrubs, and can reach speeds up to 60 mph (96 km/h) to escape predators. They form herds and give birth to single offspring after a six-month gestation period. Gazelles are vital components of savanna ecosystems, playing roles as prey and grazers.'
    };
  
    return (
      <>
        <section className="HornedBeast">
          <div className="card">
            <h2>{alpine.title}</h2>
            <img src={alpine.image} alt={alpine.title} />
            <p>Description: {alpine.description}</p>
          </div>
  
          <div className="card">
            <h2>{gazelles.title}</h2>
            <img src={gazelles.image} alt={gazelles.title} />
            <p>Description: {gazelles.description}</p>
          </div>
        </section>
        <h2 onClick={() => setCount(count + 1)}>Number of Clicks: {count}</h2>
      </>
    );
  }

export default Gallery;