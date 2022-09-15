import {connect} from "react-redux";
import Details from "../components/Details";

const mapStateToProps = (state) => {
  return {
    detailsList: state.detailsList,
  };
};

export default connect(mapStateToProps)(Details);
