import React from "react";

import "./Project.css";

const Project = ({
  images,
  name,
  gitLink,
  demoLink,
  description,
  stack,
  learned,
  date,
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="app__project">
        <h1>{name}</h1>
        {date && <p className="app__project-date">{date}</p>}
        <div className="app__project-image-wrapper">
          {images.length > 1 && (
            <button className="scroll-btn left" onClick={scrollLeft}>
              &#10094;
            </button>
          )}
          <div className="app__project-image-container" ref={scrollRef}>
            {images.map((img, index) => (
              <div key={index} className="app__project-image-slide">
                <img
                  src={img}
                  alt={`${name} screenshot ${index + 1}`}
                  onClick={() => openModal(img)}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <button className="scroll-btn right" onClick={scrollRight}>
              &#10095;
            </button>
          )}
        </div>
        <div className="app__project-description">
          <h3>Description</h3>
          <p>{description}</p>
          <h3>Tech Stack</h3>
          <h4>{stack}</h4>
          <h3>Learned / Challenges</h3>
          <p>{learned}</p>
        </div>
        <div className="app__project-links">
          <button
            type="button"
            onClick={() => window.open(gitLink, "_blank", "noreferrer")}
          >
            Github
          </button>
          <button
            type="button"
            onClick={() => window.open(demoLink, "_blank", "noreferrer")}
          >
            Live Demo
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="app__project-modal" onClick={closeModal}>
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={selectedImage} alt="Full size" />
        </div>
      )}
    </>
  );
};

export default Project;
