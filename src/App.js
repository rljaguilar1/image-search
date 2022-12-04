import './App.css';
import Jumbotron from './Components/Jumbotron';
import SearchField from './Components/SearchField';
import Images from './Components/Images';
import useAxios from './Hooks/useAxios';
import { createContext, useState } from 'react';

// Create Context
export const ImageContext = createContext();

function App() {

  const [searchImage, setSearchImage] = useState('');

  // API call.
  // default value set to "office".
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  // Store values from api response.
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
