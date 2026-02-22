import { useEffect, useState } from "react";

export function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`,
        );
        const data = await response.json();
        setResults(data?.map((fruit) => fruit?.name));
      } catch (error) {
        console.error(error);
      }
    }, 700);
  }, []);

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
      <div id="results">
        {results.length > 0 ? (
          results.map((result) => <p className="result-item">{result}</p>)
        ) : (
          <p>No result found</p>
        )}
      </div>
    </div>
  );
}
