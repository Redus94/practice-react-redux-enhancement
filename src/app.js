// ./src/app.js
import React from "react";
import { createRoot } from "react-dom/client";

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer as gitHubReducer } from "./modules/github";
import { reducer as stackOverFlowReducer } from "./modules/stackoverflow";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";

const store = createStore(
  combineReducers({
    github: gitHubReducer,
    stackoverflow: stackOverFlowReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
