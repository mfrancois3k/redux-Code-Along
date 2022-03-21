import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

function App() {
  {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
