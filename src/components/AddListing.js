import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Map from "./Map";

const AddListing = (props) => {
  const [state, setState] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });
  const [display, setDisplay] = useState({});

  const handleChange = (e) => {
    // const newState = { ...state };
    // newState[e.target.name] = e.target.value;
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    setDisplay({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay({ ...state });
    const payload = { ...state };
    if (
      !payload.name ||
      !payload.address ||
      !payload.hours ||
      !payload.description
    )
      return;
    payload.id = props.listings.length + 1;
    props.addListing(payload);

    const encodedAddress = encodeURI(payload.address);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_GEOCODE_KEY,
        "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
      },
    };

    fetch(
      `https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${encodedAddress}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        props.setLatitude(lat);
        props.setLongitude(lng);
      })
      .catch((err) => console.error(err));
    setState({
      name: "",
      address: "",
      hours: "",
      description: "",
    });
  };

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <main className="form-map-container">
      <form className="add-listing" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          onChange={(e) => handleChange(e)}
          name="name"
          className="text-field"
          id="outlined-username-input"
          placeholder="Name"
          type="text"
          autoComplete="off"
          required={true}
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
          required={true}
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
          required={true}
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
          required={true}
          value={state.description}
        />
        <Button type="submit" variant="contained">
          Add Listing
        </Button>
      </form>
      <div className="add-map-listing-container">
        <Map latitude={props.latitude} longitude={props.longitude} />
        <ul className="ul-listing-display">
          <li className="list-items-display">
            <h4>Business Name:</h4> <p>{display.name}</p>
          </li>
          <li className="list-items-display">
            <h4>Business Address:</h4> <p>{display.address}</p>
          </li>
          <li className="list-items-display">
            <h4>Business Hours:</h4> <p>{display.hours}</p>
          </li>
          <li className="list-items-display">
            <h4>Business Description:</h4> <p>{display.description}</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default AddListing;
