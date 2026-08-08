import { useState } from "react";
import arts from "../data/artisticabonita";


function Portfolio() {
  const [artworks, setArtworks] = useState(null);
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="portfolio__item"
            
            onClick={() => setArtworks(artwork)}>

          <div className="block" onClick={(e)=> e.stopPropagation}>
          <button className="portfolio__button" onClick={() => setArtworks(null)}>X</button>   
          <img
            src={artworks.imageURL}
            alt={artworks.title }
            className="blockimage"
 s         />
          </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
