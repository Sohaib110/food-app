import React from "react";
import Search from "../../components/search";

function Homepage(getData) {
  const dummydata = "dummy data from homepage";
  console.log(getData, "getData from homepage");
  const getDataFromSearchComponent = () => {
    return (
      <div>
        <Search
          getDataFromSearchComponent={getDataFromSearchComponent}
          dummydatacopy={dummydata}
        />
      </div>
    );
  };
}

export default Homepage;
