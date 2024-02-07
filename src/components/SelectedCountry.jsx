const selectedCountry = ({ country, onSelectedCountry, onBorderCountry }) => {
  const {
    name,
    currencies,
    languages,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    borders,
  } = country;

  const getFirstValue = (obj) => Object.values(obj)[0];
  const nativeName = getFirstValue(name.nativeName)?.official;
  const currencie = getFirstValue(currencies)?.name;
  const languagesArray = Object.values(languages);

  return (
    <div className="selected-country">
      <div className="btn back-btn">
        <button onClick={() => onSelectedCountry(false)}>&larr; Back</button>
      </div>

      <div className="selected-country-info">
        <div className="selected-country-img">
          <img src={flags.svg} alt="country flag" />
        </div>
        <div className="info-details">
          <h2>{name.common}</h2>
          <div className="info-details-first">
            <p>
              <b>Native Name</b>: {nativeName}
            </p>
            <p>
              <b>Population</b>: {population.toLocaleString()}
            </p>
            <p>
              <b>Region</b>: {region}
            </p>
            <p>
              <b>Subregion</b>: {subregion}
            </p>
            <p>
              <b>Capital</b>: {capital}
            </p>
          </div>
          <div className="info-details-second">
            <p>
              <b>Top level domain</b>: {tld}
            </p>
            <p>
              <b>Currencie</b>: {currencie}
            </p>
            <p>
              <b>Language</b>: {languagesArray.join(', ')}
            </p>
          </div>
          <p>
            <em>
              <b>Border Countries</b>:
            </em>
          </p>
          <div className="border-countries">
            {borders &&
              borders.map((borderedCountry, index) => (
                <button
                  key={index}
                  onClick={() => onBorderCountry(borderedCountry)}
                >
                  {borderedCountry}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default selectedCountry;
