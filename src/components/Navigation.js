import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navigation(props) {
  return props.isLogged ? (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dallas Small Business
          </Typography>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button color="inherit">Listings</Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/add">
            <Button color="inherit">Add</Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button onClick={() => props.logOutUser()} color="inherit">
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      {props.isLogged ? `${props.user.username} is logged in` : null}
    </Box>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dallas Small Business
          </Typography>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button color="inherit">Listings</Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
      {/* {props.isLogged ? `${props.user.username} is logged in` : "not logged"} */}
    </Box>
  );
}
