import PropTypes from "prop-types"; // Import PropTypes
import React from "react";

const Child1 = React.memo(function Child1Component({ name }) {
  console.log("Rendering MyComponent...");
  return <h2>Hello, {name}!</h2>;
});

// ✅ Add PropTypes validation
Child1.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
};

export default Child1;
