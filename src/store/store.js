import REDUCER from "./reducer";
import STATE from "./state";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default createStore(REDUCER, STATE, applyMiddleware(thunk));
