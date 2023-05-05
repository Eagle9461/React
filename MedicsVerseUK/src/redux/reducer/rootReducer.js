import { combineReducers } from "redux";
import jobReducer from "./jobReducer"
import forumReducer from "./forumReducer"
const rootReducer = combineReducers({
    job: jobReducer,
    forum: forumReducer
})
export default rootReducer