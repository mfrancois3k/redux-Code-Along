import React from "react";
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{this.props.age}</span>
      </div>
      <button onClick={this.props.onAgeUp}>Age UP</button>
      <button onClick={this.props.onAgeDown}>Age Down</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
