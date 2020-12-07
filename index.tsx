import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { rootStore, rootSaga } from "./ducks";
import Application from "./App";
import "./style.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Application name={this.state.name} />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
