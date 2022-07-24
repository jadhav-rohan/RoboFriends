import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 br3">
      <input
        className="bg-lightest-blue w-40 pa3"
        type="search"
        placeholder="Search your Robo-Friend here!"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
