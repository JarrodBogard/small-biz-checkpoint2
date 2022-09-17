import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import { checkAuth } from "../Router";

// const ProtectedComponent = (props) => {
//   const { component: Component } = props;
//   return checkAuth() ? (
//     <Component component={Link} to="/add" label="Add" color="inherit">
//       Add
//     </Component>
//   ) : null;
// };

export default function Navigation(props) {
  return props.isLogged ? (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dallas Small Business
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Listings
          </Button>
          {/* <ProtectedComponent component={Button} /> */}
          <Button component={Link} to="/add" color="inherit">
            Add
          </Button>
          <Button
            component={Link}
            to="/"
            onClick={() => props.logOutUser()}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <h4 className="logged-heading">{props.user.username} is logged in</h4>
    </Box>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dallas Small Business
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Listings
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
