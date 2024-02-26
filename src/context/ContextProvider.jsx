import { createContext, useEffect, useState } from 'react';

export const FollowContext = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const photosJson = await fetch('/photos.json');
    const { photos } = await photosJson.json();

    setPhotos(photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <FollowContext.Provider value={{ photos, setPhotos }}>
      {children}
    </FollowContext.Provider>
  );
};

export default ContextProvider;

export { ContextProvider };