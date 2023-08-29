import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '37237268-001c8e95be6ecdc276e5b14c7';
const BASE_URL = 'https://pixabay.com/api/';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setPage(prevPage => prevPage + 1);
      })
      .finally(() => {
        setIsLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = largeImageURL => {
    setSelectedImage(largeImageURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onItemClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={() => setPage(page + 1)}>Load More</Button>
      )}
      {selectedImage && (
        <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

