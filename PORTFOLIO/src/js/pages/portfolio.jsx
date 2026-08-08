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
            <img
              src={artworks.imageURL}
              alt={artworks.title }
              className="blockimage"/>

              <div className="words">
                <h3>{artworks.title}</h3>
              </div>
          </div>
        ))}
      </div>
      {artworks && (
        <div className="portfolio__modal" onClick={() => setArtworks(null)}>
          <div className="portfolio__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => setArtworks(null)}>X</button>
            <img src={artworks.imageURL} alt={artworks.title} className="modal-image"/>
            <div className="art">

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
