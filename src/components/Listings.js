import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeListing } from "../redux/action";
import { Link } from "react-router-dom";

export default function Listings(props) {
  // console.log(props.isLogged, "listings");
  // const [isAuth, setIsAuth] = useState(false);

  // if (props.isLogged) setIsAuth(true);

  const handleClick = (index) => {
    console.log(index);
    props.removeListing(index);
  };

  // return isAuth ? (
  return props.isLogged ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          (Authenticated)
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
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Link to="/details">
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </Link>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
                <Grid style={{ color: "red", cursor: "pointer" }} item xs={8}>
                  <DeleteForeverIcon onClick={() => handleClick(index)} />
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <TableContainer component={Paper}>
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
          {props.listings.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from "react";
// // import ListItems from "../redux/state";

// const Listings = (props) => {
//   console.log(props);
//   return (
//     <div className="listings">
//       <ul>
//         {props.listings.map((listing) => {
//           return <li key={listing.id}>{listing.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Listings;
