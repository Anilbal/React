import { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  return (
    <div id="color-picker-container">
      <input type="color" id="color-input"/>
    </div>
  );
};
