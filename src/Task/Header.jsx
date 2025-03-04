//create a simple react component called Header that displays a site title("My Cool Website")and a navigation menu with links (Home,About,Service,contact)Use basic component,jsx,rendering content.

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Cool Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    gap: "30px",
    width: "98%",
  },
  title: {
    margin: 0,
    marginRight: "50px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    padding: 0,
    margin: 0,
  },
  navItem: {
    textDecoration: "none",
    color: "white",
  },
};

export default Header;
