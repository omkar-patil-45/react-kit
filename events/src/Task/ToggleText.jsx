//create a component that displays show or hide button when clicked it toggles the visiblity of a paragraph of a text basic state manegment using useState


import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}Text
      </button>
      {isVisible && <p>This is Toggle Paragraph</p>}
    </div>
  );
};

export default ToggleText;

