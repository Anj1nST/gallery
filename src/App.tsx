import React from "react";
import "./App.scss";
import RouterConfig from "./router/RouterConfig";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterConfig />
      </div>
    </Provider>
  );
}

export default App;
