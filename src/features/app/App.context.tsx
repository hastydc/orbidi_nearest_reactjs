import { createContext, useState } from 'react';

/**
 * App context to define shared states
 */
export const AppContext = createContext({
  coordinates: { latitude: 0, longitude: 0 },
  setCoordinates: (value: any) => value,
});

/**
 * App context provider
 * @param {Object} source data
 * @returns {Object} component
 */
export const AppContextProvider = ({ children }: any) => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const value = {
    coordinates,
    setCoordinates,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default AppContextProvider;
