import { useState, useEffect } from 'react';
import axios from 'axios';
import { OptionType } from '../AutoCompleteSearch';

const useCountries = () => {
  const [countries, setCountries] = useState<OptionType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCountriesData = async () => {
    try {
      setIsLoading(true);
      const countries = await axios.get(
        'https://restcountries.com/v3.1/all'
      );
      const countriesData: OptionType[] = countries.data.map(
        (country: { [key: string]: any }) => ({
          id: country.name.common,
          name: country.name.common,
          categoryName: country.continents[0],
        })
      );
      setIsLoading(false);
      setCountries(countriesData);
    } catch (err: any) {
      setIsError(!!err.message);
    }
  };

  console.log('--test', isError);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return { countries, isError, isLoading };
};

export default useCountries;
