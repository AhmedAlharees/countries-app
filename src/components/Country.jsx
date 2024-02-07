const Country = ({ country, onSelectedCountry }) => {
  
  return (
    <div className="country" onClick={() => onSelectedCountry(country)}>
      <div className="image-container">
        <img src={`${country.flags.svg}`} alt="country flag" />
      </div>
      <div className="country-info">
        <h2>{country.name.common}</h2>
        <p><b>Population</b>: {country.population.toLocaleString()}</p>
        <p><b>Region</b>: {country.region}</p>
        <p><b>Capital</b>: {country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
