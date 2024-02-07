const Filter = ({ onHandleSetRegion }) => {
  return (
    <div className="filter-container">
      <label htmlFor="user-selection">Filter by region:</label>
      <select
        name="user-selection"
        id=""
        aria-placeholder="search"
        onChange={(e) => onHandleSetRegion(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
