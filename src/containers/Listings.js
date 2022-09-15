import { connect } from "react-redux";
import Listings from "../components/Listings";
import { removeListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
