import React from "react";
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <div>
        Age: <span>{this.props.age}</span>
      </div>
      <button onClick={this.props.oneAgeUp}>Age Up</button>
      <button onClick={this.props.oneAgeDown}>Age Down</button>
      <hr />
      <div>History</div>
      <div>
        <ul>
          {this.props.history.map((el) => (
            <li key={el.id} onClick={() => this.props.onDelItem(el.id)}>
              {el.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" }),
    onDelItem: (id) => dispatch({ type: "DEL_ITEM", key: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
