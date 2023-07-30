import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/">
              <h1>Wiki Countries</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
