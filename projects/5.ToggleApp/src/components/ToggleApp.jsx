import { useEffect, useState } from "react";

export function ToggleApp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    handleToggleVisibility();
  }, []);
  return (
    <div className="toggle-container">
      <button id="toggle-button" onClick={handleToggleVisibility}>Message</button>
      {isVisible && <p id="message">I love coding app!</p>}
    </div>
  );
}
