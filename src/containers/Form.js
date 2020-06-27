import { connect } from "react-redux";
import Form from "../components/Form";
import { add } from "../redux/actions";

const mapDispatch = (dispatch) => ({
  addToDo: (title) => dispatch(add(title)),
});

export default connect(null, mapDispatch)(Form);
