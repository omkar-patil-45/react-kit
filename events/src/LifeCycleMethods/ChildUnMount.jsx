import { useEffect } from "react";

const ChildUnMount = () => {
  useEffect(() => {
    let intervelId = setInterval(() => {
      alert("Hello....");
    }, 5000);
    return () => {
      clearInterval(intervelId);
    };
  }, []);

  return <div>IM UNMOUNTING COMPONENT</div>;
};

export default ChildUnMount;
