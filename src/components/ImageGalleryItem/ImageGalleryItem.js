import React from 'react';


const ImageGalleryItem = ({ image, onItemClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={onItemClick}
      />
    </li>
  );
};

export default ImageGalleryItem;