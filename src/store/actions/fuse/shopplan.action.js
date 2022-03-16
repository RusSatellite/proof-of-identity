export const HIDE_SHOPPLAN_MODAL = "[SHOPPLAN_MODAL] HIDE";
export const SHOW_SHOPPLAN_MODAL = "[SHOPPLAN_MODAL] SHOW";

export function hide_shopplan_modal() {
    return {
        type: HIDE_SHOPPLAN_MODAL,
    };
}

export function show_shopplan_modal() {
    return {
        type: SHOW_SHOPPLAN_MODAL,
    };
}
