// import { useState } from "react";

// const GeoCodeMap = (
//   props,
//   { latitude, longitude, setLatitude, setLongitude }
// ) => {
//   const [address, setAddress] = useState("");
//   // console.log(props.address, "geocode");

//   const updateCoordinates = (e) => {
//     e.preventDefault();
//     // setAddress(props.address);
//     const encodedAddress = encodeURI(address);
//     console.log(encodedAddress, "function");

//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "cbfa4a4bedmsh6ac359a971f3627p12ba07jsn040823bec505",
//         "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
//       },
//     };

//     fetch(
//       `https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${encodedAddress}`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         const { lat, lng } = response.results[0].geometry.location;
//         // console.log(lat, lng);
//         setLatitude(lat);
//         setLongitude(lng);
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       The latitude is {latitude}, The longitude is {longitude}
//       <form onSubmit={(e) => updateCoordinates(e)}>
//         <div>
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             id="address"
//             required
//             aria-describedby="addressHelp"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <button className="btn mb-4 btn-primary" type="submit">
//           Search Location
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GeoCodeMap;
