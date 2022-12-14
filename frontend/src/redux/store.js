import { combineReducers, legacy_createStore } from "redux";
import {reducer as suggestionReducer} from "../redux/suggestionReducer/reducer"
const rootReducer=combineReducers({
    suggestionReducer
})

const store = legacy_createStore(rootReducer)

export {store}