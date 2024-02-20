import PropTypes from 'prop-types';

import './ImageGalleryItem.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => {
  return (
    <>
      <li className='ImageGalleryItem'>
        <img
          onClick={() => onClickImage(largeImageURL)}
          className='ImageGalleryItem__image'
          src={webformatURL}
          alt={tags}
          largeimage={largeImageURL}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClickImage: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;