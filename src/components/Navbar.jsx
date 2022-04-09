import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCat } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faCat} className="nav--logo" />
      <h1 className="nav--title">Adopt a Cat</h1>
      <div className="nav--items">
        <div className="nav--items--contact">
          <h4>Contact</h4>
        </div>
        <div className="nav--items--aboutus">
          <h4>About us</h4>
        </div>
        <div className="nav--items--ourcats">
          <h4>Our cats</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
