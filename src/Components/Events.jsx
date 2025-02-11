// import { useState } from "react";

// const Events = () => {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Typed:{text}</p>
//     </div>
//   );
// };

// export default Events;

//Pass data to the event handler in Functional Component

const Events = () => {
  const handleClicke = (id) => {
    console.log("Clicked Id", id);
  };
  return (
    <div>
      <button onClick={() => handleClicke(1)}>Btn1</button>
      <button onClick={() => handleClicke(2)}>Btn2</button>
    </div>
  );
};

export default Events;
