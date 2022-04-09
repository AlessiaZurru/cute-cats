import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCat } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faCat} className="nav--logo" />
      <h1 className="nav--title">Adopt Cats</h1>
    </nav>
  );
}

export default Navbar;
