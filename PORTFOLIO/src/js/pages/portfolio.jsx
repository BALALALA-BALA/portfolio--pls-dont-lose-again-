import { useState } from "react";
import arts from "../data/artisticabonita.jsx";
import "../../css/sections/portfolio.css";

export default function Portfolio() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>

      <div className="gallery-grid">
        {arts.map((art) => (
          <div
            key={art.id}
            className="art-card"
            onClick={() => setSelectedArtwork(art)}
          >
            <img
              src={art.image}
              alt={art.title}
              className="art-image"
            />

            <div className="overlay">
              <h3>{art.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedArtwork && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedArtwork(null)}
            >
              ✕
            </button>

            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="modal-image"
            />

            <div className="modal-details">
              <h2>{selectedArtwork.title}</h2>

              <p>
                <strong>Medium:</strong> {selectedArtwork.medium}
              </p>

              <p>
                <strong>Year:</strong> {selectedArtwork.year}
              </p>

              <p>{selectedArtwork.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}