import { useState } from "react";

export const SuperHeroForm = () => {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
    </div>
  );
};
