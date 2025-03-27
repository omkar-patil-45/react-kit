//Build a User Profile component that recives a name,age,and location as a props and displays the users information using props to pass to component

const UserProfile = ({ name, age, location }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        Name:
        {name}
      </p>
      <p>Age:{age}</p>
      <p>Location:{location}</p>
    </div>
  );
};

export default UserProfile;
