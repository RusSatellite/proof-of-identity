import { combineReducers } from "redux";
import shopplan_modal from "./shopplan.reducer";
import payment_modal from "./payment.reducer";

const fuse = combineReducers({
    shopplan_modal,
    payment_modal,
});
  
export default fuse;