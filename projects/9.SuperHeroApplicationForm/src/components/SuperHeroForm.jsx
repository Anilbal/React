import { useState } from "react";

export const SuperHeroForm = () => {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>

      <form>
        <div className="section">
          <label>
            Hero Name
            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />
          </label>
          <label>
            Real Name
            <input
              type="password"
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
            />
          </label>
        </div>
        <label className="section column">
          How did you get your powers?
          <select>
            <option value="">Select one</option>
            <option value="">Bitten by a strange creature</option>
            <option value="">Radioactive exposure</option>
            <option value="">Science experiment</option>
            <option value="">Alien heritage</option>
            <option value="">Ancient artifact discovery</option>
            <option value="">Other</option>
          </select>
        </label>
      </form>
    </div>
  );
};
