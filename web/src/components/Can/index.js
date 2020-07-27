import { connect } from "react-redux";

function checkAuth() {
  return true;
}

const Can = ({ children, auth, checkRole, checkPermissions }) =>
  checkAuth(auth, checkRole, checkPermissions) && children;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Can);
