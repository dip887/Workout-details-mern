import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Gym Workout Details</h2>
        </Link>
        <p>Developed by Dipanshu Garg(FSWD:10322) using MERN</p>
      </div>
    </header>
  );
};

export default Navbar;
