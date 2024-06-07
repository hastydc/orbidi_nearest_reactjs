import { createContext, useState } from 'react';
import { City } from 'src/models/city.interface';

/**
 * App context to define shared states
 */
export const AppContext = createContext({
  nearest: [],
  setNearest: (value: any) => value,

  city: { name: '', country: '', lat: 0, lng: 0 },
  setCity: (value: any) => value,
});

/**
 * App context provider
 * @param {Object} source data
 * @returns {Object} component
 */
export const AppContextProvider = ({ children }: any) => {
  const [nearest, setNearest] = useState([]);
  const [city, setCity] = useState<City>({
    name: '',
    country: '',
    lat: 0,
    lng: 0,
  });

  const value = {
    nearest,
    setNearest,
    city,
    setCity,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default AppContextProvider;
