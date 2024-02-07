import search_icon from '../assets/search-icon.svg';
const Input = ({ onHandleSearchedCountry }) => {
  return (
    <div className="input-container">
      <img src={search_icon} alt="search icon" />
      <input
        name="country"
        type="text"
        placeholder="Search for country..."
        onChange={(e) => onHandleSearchedCountry(e.target.value)}
      />
    </div>
  );
};

export default Input;
