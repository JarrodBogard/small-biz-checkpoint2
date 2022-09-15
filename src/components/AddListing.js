import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const AddListing = (props) => {
  console.log(props.listings, "add listing");
  const [state, setState] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  const handleChange = (e) => {
    // const newState = { ...state };
    // newState[e.target.name] = e.target.value;
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...state };
    payload.id = props.listings.length + 1;
    console.log("listings", props.listings, payload);
    props.addListing(payload);
    setState({
      name: "",
      address: "",
      hours: "",
      description: "",
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form className="add-listing">
      <TextField
        onChange={(e) => handleChange(e)}
        name="name"
        className="text-field"
        id="outlined-username-input"
        placeholder="Name"
        type="text"
        autoComplete="off"
        required
        value={state.name}
      />

      <TextField
        onChange={(e) => handleChange(e)}
        name="address"
        className="text-field"
        id="outlined-password-input"
        placeholder="Address"
        type="text"
        autoComplete="off"
        required
        value={state.address}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        name="hours"
        className="text-field"
        id="outlined-password-input"
        placeholder="Hours"
        type="text"
        autoComplete="off"
        required
        value={state.hours}
      />
      <TextField
        onChange={(e) => handleChange(e)}
        name="description"
        className="text-field"
        id="outlined-password-input"
        placeholder="Description"
        type="text"
        autoComplete="off"
        required
        value={state.description}
      />
      <Button variant="contained" onClick={(e) => handleSubmit(e)}>
        Add Listing
      </Button>
    </form>
  );
};

export default AddListing;
