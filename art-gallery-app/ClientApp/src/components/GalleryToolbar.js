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

  const [limitValue, setLimitValue] = useState(3);

  const handleQueryParamChange = (event) => {
    const { id, value } = event.target;
    setQueryParams((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFetchGallery = () => {
    const { color1, color2, color3, title, description, size, subject, medium, date } = queryParams;
    const formattedQueryParam = Object.entries(queryParams)
      .filter(([key, value]) => value !== null && value !== '')
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    console.log(formattedQueryParam);
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
    <div>
      <label htmlFor="color1">Color 1:</label>
      <input
        type="text"
        id="color1"
        value={queryParams.color1}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="color2">Color 2:</label>
      <input
        type="text"
        id="color2"
        value={queryParams.color2}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="color3">Color 3:</label>
      <input
        type="text"
        id="color3"
        value={queryParams.color3}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={queryParams.title}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={queryParams.description}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="size">Size:</label>
      <input
        type="text"
        id="size"
        value={queryParams.size}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        value={queryParams.subject}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="medium">Medium:</label>
      <input
        type="text"
        id="medium"
        value={queryParams.medium}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        value={queryParams.date}
        onChange={handleQueryParamChange}
      />

      <label htmlFor="imageLimit">Gallery Size:</label>
      <input
        type="number"
        id="imageLimit"
        value={limitValue}
        onChange={handleLimitValueChange}
      />

      <button onClick={handleFetchGallery}>Fetch</button>
    </div>
  );
}

export default GalleryToolbar;