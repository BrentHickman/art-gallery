import React from "react";
import PropTypes from "prop-types";

function ImageDetail(props){
  const { image } = props;

  return (
    <React.Fragment>
      <img src={image.imageUrl}/>
      <h1>Image Detail</h1>
      <h3>{image.title}</h3>
      <p>{image.description}</p>
      <p>{image.size}</p>
      <p>{image.date}</p>
      <p>{image.medium}</p>
      <p>{image.subject}</p>
      {image.available ? <p>Available</p> : <p>Not Available</p>}
      <hr/>
    </React.Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object,

};

export default ImageDetail;