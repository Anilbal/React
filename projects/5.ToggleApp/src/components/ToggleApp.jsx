import { useState } from "react";

export function ToggleApp() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="toggle-container">
      <button id="toggle-button">Message</button>
      {isVisible && <p id="message">I love coding app!</p>}
    </div>
  );
}
