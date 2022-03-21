import React from "react";
import { connect } from "react-redux";
function App() {
  // state = {
  //   age: 21,
  // };

  // oneAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age,
  //   });
  // };

  // oneAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age,
  //   });
  // };

  return (
    <div className="App">
      <div>
        Age: <span>{this.props.age}</span>
      </div>
      <button onClick={this.props.oneAgeUp}>Age Up</button>
      <button onClick={this.props.oneAgeDown}>Age Down</button>
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
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
