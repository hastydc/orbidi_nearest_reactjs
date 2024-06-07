import { useState, useContext, useRef, useEffect } from 'react';
import sortByDistance from 'sort-by-distance';
import { AppContext } from '../../../App.context';
import { City } from 'src/models/city.interface';
import Cities from '../../../../../db/cities.json';

/**
 * Use select custom hook with functions of select
 * @returns {Object} response
 */
const useSelect = () => {
  const [cityList, setCityList] = useState<City[]>([]);
  const [dropdown, setDropdown] = useState(false);
  const { city, setCity, setNearest } = useContext(AppContext);
  const inputRef = useRef(null);

  /**
   * Search function
   */
  const search = (): void => {
    const value = (inputRef!.current! as any).value ?? '';

    if (value.length < 1) return setCityList([]);

    const list = Cities.filter((x) =>
      x.name.toLowerCase().includes(value.toLowerCase())
    ) as unknown as City[];

    list.splice(10);
    setCityList(list);
  };

  /**
   * Find nearest points by geoLocation
   */
  const findNearest = (): void => {
    const opts = {
      yName: 'lat',
      xName: 'lng',
    };

    const sorted = sortByDistance(city, Cities, opts) as unknown as City[];
    sorted.shift();
    sorted.splice(3);
    (inputRef!.current! as any).value = city.name;

    setNearest(sorted);
    setCity(city);
  };

  useEffect(() => {
    if (!city.name) return;

    findNearest();
  }, [city]);

  return { inputRef, cityList, city, dropdown, setDropdown, search, setCity };
};

export default useSelect;
