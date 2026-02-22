import { useState } from "react";

export function FruitsSearch() {
  const [query,setQuery]=useState("")
  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search For Fruits:</label>
        <input type="search" id="search-input" />
      </form>
    </div>
  );
}
