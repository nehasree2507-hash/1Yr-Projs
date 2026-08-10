import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#032B44",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <Link to="/" className="nav-link">Home</Link>
<Link to="/about" className="nav-link">About</Link>
<Link to="/contact" className="nav-link">Contact</Link>
<Link to="/login" className="nav-link">Login</Link>
<Link to="/signup" className="nav-link">Signup</Link>
    </nav>
  );
}

export default Navbar;