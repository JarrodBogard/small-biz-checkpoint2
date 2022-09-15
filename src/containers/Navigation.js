import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { logOutUser } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: (isLogged) => dispatch(logOutUser((isLogged = false))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
