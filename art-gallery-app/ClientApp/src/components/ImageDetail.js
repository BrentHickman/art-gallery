import React from "react";
import PropTypes from "prop-types";

function ImageDetail(props) {
  const { image } = props;

  return (
    <React.Fragment>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={image.imageUrl} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>Title: {image.title}</h3>
          <p>Description: {image.description}</p>
          <p>Size: {image.size}</p>
          <p>Year: {image.date}</p>
          <p>Medium: {image.medium}</p>
          <p>Subject: {image.subject}</p>
          {image.available ? <p>Available</p> : <p>Not Available</p>}
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object,
};

export default ImageDetail;
