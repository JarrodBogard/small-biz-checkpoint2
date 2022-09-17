import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
// import { checkAuth } from "../Router";

export default function Listings(props) {
  const handleClick = (index) => {
    props.removeListing(index);
  };

  // const ProtectedComponent = (props) => {
  //   const { component: Component } = props;
  //   return checkAuth() ? (
  //     <Component onClick={() => handleClick(props.index)} />
  //   ) : null;
  // };

  const handleDetails = (row) => {
    const encodedAddress = encodeURI(row.address);
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
    props.filterListing(row);
  };

  useEffect(() => {
    // console.log(props.latitude, props.longitude, "useEffect");
  }, [props.latitude, props.longitude]);

  return props.isLogged ? (
    <main className="main-listing-container">
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listings.map((row, index) => (
              <TableRow
                key={row.name + row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Link to="/details" onClick={() => handleDetails(row)}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                </Link>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{row.hours}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <Grid style={{ color: "red", cursor: "pointer" }} item xs={8}>
                    {/* delete icon */}
                    {/* <ProtectedComponent
                      index={index}
                      component={DeleteForeverIcon}
                    /> */}
                    <DeleteForeverIcon onClick={() => handleClick(index)} />
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  ) : (
    <main className="main-listing-container">
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listings.map((row, index) => (
              <TableRow
                key={row.name + row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Link to="/details" onClick={() => handleDetails(row)}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                </Link>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{row.hours}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
