import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
