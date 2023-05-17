import React from "react";
import PropTypes from "prop-types";

function ImageDetail(props){
  const { image, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Image Detail</h1>
      <h3>{image.name}</h3>
      <p>{image.age}</p>
      <p>{image.contact}</p>
      <p><em>{image.description}</em></p>
      <button onClick={onClickingEdit}>Update Image</button>
      <button onClick={()=> onClickingDelete(image.id)}>Remove Image</button>
      <hr/>
    </React.Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ImageDetail;