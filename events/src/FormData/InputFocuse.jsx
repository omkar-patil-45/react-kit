import { useRef } from "react";

const InputFocuse = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default InputFocuse;
