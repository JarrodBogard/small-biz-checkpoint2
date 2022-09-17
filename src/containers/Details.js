import { connect } from "react-redux";
import Details from "../components/Details";

const mapStateToProps = (state) => {
  return {
    detailsList: state.detailsList,
    latitude: state.latitude,
    longitude: state.longitude,
  };
};

export default connect(mapStateToProps)(Details);
