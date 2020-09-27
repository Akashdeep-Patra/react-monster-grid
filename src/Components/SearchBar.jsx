import React from "react";
import "./SearchBar.css";
export default ({ setSearch }) => {
  return (
    <div className="ui icon massive input search">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <i className="search icon"></i>
    </div>
  );
};
