import React from "react";
import { FaSearch } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

function SearchBox() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      return;
    }
    // Redirect to the search results page with the search term
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm(""); // Clear the search input after submission
  }

  return (
    <div className="search-box-container">
      <form onSubmit={handleSubmit} className="search-box">
        <input type="text" name="search" id="search" placeholder="Search" onChange={(a) => setSearchTerm(a.target.value)} />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
