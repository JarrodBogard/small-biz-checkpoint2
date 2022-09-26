import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const Login = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loginName: "",
    loginPass: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.loginName === props.user.username &&
      state.loginPass === props.user.password
    ) {
      props.logUser();
      setState({
        loginName: "",
        loginPass: "",
      });
      document.cookie = "loggedIn=true;max-age=10";
      navigate("/");
    }
  };

  useEffect(() => {
    // console.log(state, props.isLogged);
  }, [state, props.isLogged]);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <Box className="login-box">
        {/* <Box className="login-box" component="form" onSubmit={handleSubmit}> */}
        <TextField
          onChange={(e) => handleChange(e)}
          name="loginName" // match name in state
          className="text-field"
          id="outlined-username-input"
          placeholder="Username"
          type="text"
          autoComplete="off"
          value={state.loginName}
        />

        <TextField
          onChange={(e) => handleChange(e)}
          name="loginPass" // match name in state
          className="text-field"
          id="outlined-password-input"
          placeholder="Password"
          type="password"
          autoComplete="off"
          value={state.loginPass}
          // onChange={(e) => setState({ loginPass: e.target.value })}
          //   label={state.password ? "" : "Password"}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
