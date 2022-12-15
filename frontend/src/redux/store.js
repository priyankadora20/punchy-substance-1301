import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as suggestionReducer} from "../redux/suggestionReducer/reducer"
const rootReducer=combineReducers({
    suggestionReducer
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}