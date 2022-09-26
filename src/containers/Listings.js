import { connect } from "react-redux";
import Listings from "../components/Listings";
import {
  filterListing,
  removeListing,
  setLatitude,
  setLongitude,
} from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLogged: state.isLogged,
    detailsList: state.detailsList,
    latitude: state.latitude,
    longitude: state.longitude,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
    filterListing: (listing) => dispatch(filterListing(listing)),
    setLatitude: (latitude) => dispatch(setLatitude(latitude)),
    setLongitude: (longitude) => dispatch(setLongitude(longitude)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
