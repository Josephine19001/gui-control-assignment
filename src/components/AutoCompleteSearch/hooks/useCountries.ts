import { useState, useEffect } from 'react';
import axios from 'axios';

export interface CountryDataType {
  id: string;
  categoryName?: string;
  name: string;
}

const useCountries = () => {
  const [countries, setCountries] = useState<CountryDataType[]>([]);

  const fetchCountriesData = async () => {
    try {
      const countries = await axios.get(
        'https://restcountries.com/v3.1/all'
      );
      const countriesData: CountryDataType[] = countries.data.map(
        (country: { [key: string]: any }) => ({
          id: country.name.common,
          name: country.name.common,
          categoryName: country.continents[0],
        })
      );
      setCountries(countriesData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return { countries };
};

export default useCountries;
