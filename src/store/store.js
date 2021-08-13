import { createStore, combineReducers } from "redux";
import authReducers from "./reducers/authReducers";

const rootReducer = combineReducers({
    authReducers: authReducers
})

const configureStore = () => createStore(rootReducer);

export default configureStore;