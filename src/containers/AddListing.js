import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addListing, setLatitude, setLongitude } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    latitude: state.latitude,
    longitude: state.longitude,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    setLatitude: (latitude) => dispatch(setLatitude(latitude)),
    setLongitude: (longitude) => dispatch(setLongitude(longitude)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
