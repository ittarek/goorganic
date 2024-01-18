import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Header = () => {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group  "
      >
    
        <Button color="inherit">
          {" "}
          <Link to="/firstPage">First Page</Link>{" "}
        </Button>
        <Button color="inherit">
          {" "}
          <Link to="/second">Second Page</Link>{" "}
        </Button>
        <Button color="inherit">
          {" "}
          <Link to="/second2">Second Page 2</Link>{" "}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Header;
