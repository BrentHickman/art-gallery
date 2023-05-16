import React, { useState, useEffect } from 'react';
import { auth } from './../firebase.js';

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5261/v1/Images`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        setGallery(jsonifiedResponse)
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
  }, []);

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the Gallery.
          <a href="/sign-in">Click here to sign in </a>
        </h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
      return <h1>...Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <h1>Gallery</h1>
          <ul>
            {gallery && gallery.map((image, index) =>
              <li key={index}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <div className='galleryImage'>
                  <img src={image.imageUrl} alt="Gallery Image" />
                </div>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Gallery;