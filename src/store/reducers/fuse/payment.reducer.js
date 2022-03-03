import * as Actions from "../../actions";

const initial_state = {
    state : false,
    value: 0,
}

const payment_modal = (state = initial_state, action) => {
    switch (action.type) {
        case Actions.HIDE_PAYMENT_MODAL: {
            return {
                state: false,
                value: action.value,
            }
        }
        case Actions.SHOW_PAYMENT_MODAL: {
            return {
                state: true,
                value: action.value,
            }
        }
        default: {
            return state
        }
    }
};
  
export default payment_modal;
  