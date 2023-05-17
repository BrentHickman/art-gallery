import React from "react";
import PropTypes from "prop-types";

function ImageDetail(image){

  return (
    <React.Fragment>
      <h1>Image Detail</h1>
      <h3>{image.name}</h3>
      <p>{image.age}</p>
      <p>{image.contact}</p>
      <p><em>{image.description}</em></p>

      <hr/>
    </React.Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object,

};

export default ImageDetail;