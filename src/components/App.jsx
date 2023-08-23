import SearchBar from '../components/Searchbar/SearchBar';
import ImageGallery from '../components/ImageGallery/ImageGallery';


const API_KEY = '37237268-001c8e95be6ecdc276e5b14c7';
const BASE_URL = 'https://pixabay.com/api/';

export const App = () => {
  return (
  <div>
    <SearchBar />
    <ImageGallery/>
        
    
  </div>
  );
};
