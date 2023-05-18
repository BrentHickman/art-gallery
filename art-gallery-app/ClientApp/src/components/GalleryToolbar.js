import React, { useState, useEffect } from 'react';

function GalleryToolbar({ onFetchGallery, onUpdateImageLimit }) {
  const [queryParams, setQueryParams] = useState({
    title: '',
    description: '',
    size: '',
    color1: '',
    color2: '',
    color3: '',
    subject: '',
    medium: '',
    date: ''
  });

  const [limitValue, setLimitValue] = useState(100);

  const handleQueryParamChange = (event) => {
    const { id, value } = event.target;
    setQueryParams((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFetchGallery = () => {
    const formattedQueryParam = Object.entries(queryParams)
      .filter(([key, value]) => value !== null && value !== '')
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    onFetchGallery(formattedQueryParam);
  };

  const handleLimitValueChange = (event) => {
    const newLimitValue = Number(event.target.value);
    if (newLimitValue >= 1) {
      setLimitValue(newLimitValue);
    } else {
      setLimitValue(1);
    }
  };

  useEffect(() => {
    onUpdateImageLimit(limitValue);
  }, [limitValue, onUpdateImageLimit]);

  return (
    <div className="row justify-content-center">
      <div className='col-2'>
        <div className="form-group">
          <label htmlFor="imageLimit">Image Limit:</label>
          <br></br>
          <input
            type="number"
            className="form-control"
            id="imageLimit"
            value={limitValue}
            onChange={handleLimitValueChange}
            min="1"
          />
        </div>

        <button onClick={handleFetchGallery}>
          Go
        </button>
      </div>
      <div className="col-3">
        <div className="row justify-content-center">
          <div className="col">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="color1"
                placeholder='Priamary Color'
                value={queryParams.color1}
                onChange={handleQueryParamChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="color2"
                placeholder='Secondary Color'
                value={queryParams.color2}
                onChange={handleQueryParamChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="color3"
                placeholder='Third Color'
                value={queryParams.color3}
                onChange={handleQueryParamChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="row justify-content-center">
          <div className="form-group">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder='Title'
                value={queryParams.title}
                onChange={handleQueryParamChange}
              />
            </div>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder='Description'
              value={queryParams.description}
              onChange={handleQueryParamChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="size"
              placeholder='Size #in x #in'
              value={queryParams.size}
              onChange={handleQueryParamChange}
            />
          </div>
        </div>
      </div>

      <div className="col-3">
        <div className="row justify-content-center">
          <div className="form-group">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder='Subject'
                value={queryParams.subject}
                onChange={handleQueryParamChange}
              />
            </div>
            <input
              type="text"
              className="form-control"
              id="medium"
              placeholder='Medium'
              value={queryParams.medium}
              onChange={handleQueryParamChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="date"
              placeholder='Year'
              value={queryParams.date}
              onChange={handleQueryParamChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryToolbar;
