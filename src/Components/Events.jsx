import { useState } from "react";

const Events = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed:{text}</p>
    </div>
  );
};

export default Events;
