import React from "react";

function Search() {
  return (
    <form className="Search">
      <input name="search" id="search" placeholder="Search Recipe" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
