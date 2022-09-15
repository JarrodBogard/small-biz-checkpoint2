import { connect } from "react-redux";
import Listings from "../components/Listings";
import { filterListing, removeListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLogged: state.isLogged,
    detailsList: state.detailsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
    filterListing: (listing) => dispatch(filterListing(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
