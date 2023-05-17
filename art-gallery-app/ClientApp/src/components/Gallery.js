import React, { useState, useEffect } from 'react';
import { NavMenu } from './NavMenu';
import { auth } from './../firebase';
import ImageDetail from './ImageDetail';

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    setCurrentUser(auth.currentUser);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

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
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    if (selectedImage != null) {
      setSelectedImage(null);
    } else {
      setIsLoaded(true);
    }
  }

  const handleChangingSelectedImage = (id) => {
    const selection = gallery.filter(image => image.imageId === id)[0];
    setSelectedImage(selection);
    console.log(selection);
  }

  if (currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the Gallery.
          <a href="/sign-in">Click here to sign in </a>
        </h1>
      </React.Fragment>
    )
  } else if (currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <h1>Error: {error}</h1>
    } else if (!isLoaded) {
      currentlyVisibleState = <h1>...Loading...</h1>
    } else if (selectedImage != null) {
      currentlyVisibleState =
        <React.Fragment>
          <p>Hello</p>
          {<ImageDetail
            image={selectedImage} />}
        </React.Fragment>
          {buttonText = "Return to Gallery"}
    } else {
      //limit number of images to display
      let imageLimit = 3;
      currentlyVisibleState = <React.Fragment>
        <h1>Gallery</h1>
        <ul>
          {gallery && gallery.map((image) => (
              <li key={image.imageId}>
                <h3>{image.title}</h3>
                <h3>ID {image.imageId}</h3>
                <p>{image.description}</p>
                <div className='galleryImage' onClick = {() => handleChangingSelectedImage(image.imageId)}>
                  <img src={image.imageUrl} alt="Gallery Image" />
                </div>
              </li>
            ))}
        </ul>
      </React.Fragment>
        buttonText = "Reload";
      return (
        <React.Fragment>
          {<NavMenu />}
          {currentlyVisibleState}
          {error ? null : <button onClick={handleClick}>{buttonText}</button>}
        </React.Fragment>
      );
    }
  }
}

export default Gallery;