import * as Actions from "../../actions";

const initial_state = {
    state : false
}

const shopplan_modal = (state = initial_state, action) => {
    switch (action.type) {
        case Actions.HIDE_SHOPPLAN_MODAL: {
            return {
                state: false,
            }
        }
        case Actions.SHOW_SHOPPLAN_MODAL: {
            return {
                state: true,
            }
        }
        default: {
            return state
        }
    }
};
  
export default shopplan_modal;
  