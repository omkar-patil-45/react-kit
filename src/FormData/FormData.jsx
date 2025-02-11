import { useState } from "react";
import { useRef } from "react";

const FormData = () => {
  const nameRef = useRef("");

  const [name, setName] = useState("");

  const fnClick = () => {
    const nameValue = nameRef.current.value;
    setName(nameValue);
  };

  return (
    <div>
      Name:
      <input ref={nameRef} />
      <input type="button" value="submit" onClick={fnClick} />
      <h1>{name}</h1>
    </div>
  );
};

export default FormData;
