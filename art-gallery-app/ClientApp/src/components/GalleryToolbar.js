import React, { useState, useEffect } from 'react';

function GalleryToolbar({ onFetchGallery, onUpdateImageLimit }) {
  const [queryParams, setQueryParams] = useState({
    color1: '',
    color2: '',
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
    const { color1, color2 } = queryParams
    const formattedQueryParam = `color1=${color1}&color2=${color2}`
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