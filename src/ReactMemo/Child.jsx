import React from "react";

const Child = React.memo(function ChildComponent() {
  console.log("Child is rendering");
  return (
    <div>
      <h1>I m Child</h1>
    </div>
  );
});

export default Child;
