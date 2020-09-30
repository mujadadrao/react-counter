import counter from './counter';
import results from './results';
import {combineReducers} from "redux";

export default combineReducers({
        counter,
        results,
});
