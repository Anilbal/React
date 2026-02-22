import { useState } from "react";

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // form submit logic
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search For Fruits:</label>
        <input
          type="search"
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
