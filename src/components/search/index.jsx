import React, { useState } from "react";
import "./style.css";

function Search(props) {
  console.log(props);
  const { getDataFromSearchComponent } = props;
  const [inputValue, setinputValue] = useState("");
  const handleInputvalue = (event) => {
    const { value } = event.target;

    setinputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getDataFromSearchComponent(inputValue);
  };
  return (
    <form onSubmit={handleSubmit} className="Search">
      <input
        name="search"
        onChange={handleInputvalue}
        value={inputValue}
        id="search"
        placeholder="Search Recipe"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
