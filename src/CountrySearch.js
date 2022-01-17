import React, { useState } from "react";

const CountrySearch = ({ setCountry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountry(inputValue);
  };

  return (
    <div className="input-group mb-3 country-search">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Country / State"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default CountrySearch;
