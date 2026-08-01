import { useState } from "react";
import "../../css/pages/portfolio.css";
import arts from "../data/artisticabonita";


export default function Portfolio() {
  const [artworks, setArtworks] = useState(null);
  return (
    <section>
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
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
