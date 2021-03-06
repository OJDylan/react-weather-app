import React, { useState } from "react";

const CountrySearch = ( { setCountry } ) => {
  const [inputValue, setInputValue] = useState(""); // set intial state of inputValue

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
            placeholder="Country / State / City"
            value={inputValue}
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
