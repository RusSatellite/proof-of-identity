export const HIDE_PAYMENT_MODAL = "[PAYMENT_MODAL] HIDE";
export const SHOW_PAYMENT_MODAL = "[PAYMENT_MODAL] SHOW";

export function hide_payment_modal() {
    return {
        type: HIDE_PAYMENT_MODAL,
    };
}

export function show_payment_modal(value) {
    return {
        type: SHOW_PAYMENT_MODAL,
        value: value,
    };
}
