import Input from './Input';
import Filter from './Filter';
import Country from './Country';
import SelectedCountry from './SelectedCountry';
import { useEffect, useRef, useState } from 'react';

const Main = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [selectCountry, setSelectCountry] = useState(false);
  const [countryData, setCountryData] = useState({});

  const constantList = useRef(countriesList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        setCountriesList(data);
        constantList.current = data;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  const filterCountriesByRegion = (region) => {
    return constantList.current.filter((country) => {
      return region === 'All' || country.region === region;
    });
  };

  const filterCountriesByName = (countryName) => {
    return constantList.current.filter((country) =>
      country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );
  };

  const HandelSetRegion = (region) => {
    const regionalCountries = filterCountriesByRegion(region);
    setCountriesList(regionalCountries);
  };

  const handleSearchedCountry = async (countryName) => {
    if (countryName.trim() === '') {
      setCountriesList(constantList.current);
      return;
    }

    const filteredCountries = filterCountriesByName(countryName);
    setCountriesList(filteredCountries);
  };

  const selectedCountry = (country) => {
    setSelectCountry(true);
    setCountryData(country);
    handleSearchedCountry('')
  };

  const borderCountry = (countryCCA3) => {
    const country = constantList.current.find(
      (country) => country.cca3 === countryCCA3
    );
    setCountryData(country);
  };

  return (
    <div className="container">
      {selectCountry ? (
        <SelectedCountry
          country={countryData}
          onSelectedCountry={setSelectCountry}
          onBorderCountry={borderCountry}
        />
      ) : (
        <>
          <section className="searching">
            <Input onHandleSearchedCountry={handleSearchedCountry} />
            <Filter onHandleSetRegion={HandelSetRegion} />
          </section>
          <section className="countries-container">
            {countriesList.map((country) => (
              <Country
                country={country}
                key={country.key}
                onSelectedCountry={selectedCountry}
              />
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Main;
