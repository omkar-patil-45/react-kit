import { createContext } from "react";
import { useContext } from "react";

const myContext = createContext();
const D = () => {
  const ctxData = useContext(myContext);
  return (
    <div>
      <h1>D:{ctxData}</h1>
    </div>
  );
};

export default D;
