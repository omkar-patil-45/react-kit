import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Router/Navbar";
import Home from "./Router/Pages/Home";
import About from "./Router/Pages/About";
import Contact from "./Router/Pages/Contact";
// import WillUnmount from "./LifeCycleMethods/WillUnmount";
// import Mounting from "./LifeCycleMethods/Mounting";
// import KeysList from "./List&Keys/KeysList";
// import A from "./A";

// import ForwardRefA from "./FormData/ForwardRefA";
// import Counter from "./FormData/Counter";
// import InputFocuse from "./FormData/InputFocuse";
// import FormData from "./FormData/FormData";
// import Events from "./Components/Events";

function App() {
  // const name = "Sachin";
  return (
    <>
      {/* <Events /> */}

      {/* <FormData/> */}

      {/* <InputFocuse /> */}

      {/* <Counter /> */}

      {/* <ForwardRefA /> */}

      {/* <myContext.Provider value={name}>
        <A />
      </myContext.Provider> */}

      {/* <KeysList /> */}

      {/* <Mounting /> */}

      {/* <WillUnmount /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
