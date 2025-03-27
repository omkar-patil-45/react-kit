import ChildComponent from "./ChildComponent";

const PraentComponent = () => {
  const user = {
    name: "Omkar",
    age: 25,
    location: "Pune",
  };
  return (
    <div>
      <ChildComponent
        name={user.name}
        age={user.age}
        location={user.location}
      />
    </div>
  );
};

export default PraentComponent;
