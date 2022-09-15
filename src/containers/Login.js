import { connect } from "react-redux";
import Login from "../components/Login";
import { logUser } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUser: (isLogged) => dispatch(logUser(isLogged === false ? true : false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
