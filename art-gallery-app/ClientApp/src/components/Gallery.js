import React, { useState, useEffect } from 'react';
import { NavMenu } from './NavMenu';
import { auth } from './../firebase';
import ImageDetail from './ImageDetail';
import GalleryToolbar from './GalleryToolbar';

function Gallery() {
  const [error, setError] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [queryParam, setQueryParam] = useState('');
  const [imageLimit, setImageLimit] = useState(3);


  useEffect(() => {
    setCurrentUser(auth.currentUser);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const fetchGallery = (queryParam) => {
    setFetching(true); // Set fetching state to true before making the request
    const url = `http://localhost:5261/v1/Images${queryParam ? `?${queryParam}` : ''}`;


    fetch(url)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        setGallery(jsonifiedResponse)
        setError(null);
        setIsLoaded(true);
        setQueryParam('');
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setFetching(false); // Set fetching state to false when the request is completed
      });
  };

  const handleClick = () => {
    if (selectedImage != null) {
      setSelectedImage(null);
    } else {
      fetchGallery(queryParam); // Trigger the fetch request 
    }
  }

  const updateImageLimit = (limit) => {
    // Update the image limit state
    setImageLimit(limit);
  };

  const handleChangingSelectedImage = (id) => {
    const selection = gallery.filter(image => image.imageId === id)[0];
    console.log(selection);
    setSelectedImage(selection);
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
    }
    else if (selectedImage != null) {
      buttonText = "Return to Gallery";
      currentlyVisibleState = (
        <React.Fragment>

          {<ImageDetail image={selectedImage} />}
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '2vh' }}>
            {error ? null : (
              <button onClick={handleClick} disabled={fetching}>
                {fetching ? 'Loading...' : buttonText}
              </button>
            )}
          </div>
        </React.Fragment>
      );

    } else if (isLoaded) {
      currentlyVisibleState = (
        <React.Fragment>
          <GalleryToolbar onFetchGallery={fetchGallery} onUpdateImageLimit={updateImageLimit} />
          <div className="row justify-content-center">
            {gallery && gallery.slice(0, imageLimit).map((image) => (
              <div key={image.imageId} className="col-md-4 mb-3">
                <div className="galleryImage" onClick={() => handleChangingSelectedImage(image.imageId)}>
                  <div className='imageWrapper'>
                    <img src={image.imageUrl} alt="" className='img-fluid' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      );
    }
    else {
      buttonText = "Enter Gallery"
      currentlyVisibleState = (
        <React.Fragment>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '1vh' }}>
            {error ? null : (
              <button onClick={handleClick} disabled={fetching}>
                {fetching ? 'Loading...' : buttonText}
              </button>
            )}
          </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {<NavMenu />}
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default Gallery;