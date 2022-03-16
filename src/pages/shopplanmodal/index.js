import './modal.css';
import { useDispatch, useSelector } from "react-redux";
import { CloseButton } from 'react-bootstrap';
import * as Actions from "../../store/actions"

const ShopPlanModal = () => {
    const dispatch = useDispatch();
    const state = useSelector(({fuse}) => fuse.shopplan_modal.state);
    const showHideClassName = state ? "modal display-block" : "modal display-none";

    const handleClose = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_shopplan_modal());
    }

    const handleShopplan1 = (e) => {
        e.preventDefault();
        window.open("/mainnet/profile", "_parent");
    }

    const handleShopplan2 = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_shopplan_modal());
        dispatch(Actions.show_payment_modal(20));
        window.open("/mainnet/payment1", "_parent");
    }

    const handleShopplan3 = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_shopplan_modal());
        dispatch(Actions.show_payment_modal(500));
        window.open("/mainnet/payment2", "_parent");
    }

    return (
        <div className={showHideClassName}>
            <section className="container mt-4 modal-main">
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <h1 className='proof-identify-bold center' style={{margin: "10px"}}>Become a participant as<CloseButton className='right' onClick={handleClose}/></h1>
                </div>
                <div className='center'>
                    <button className='btn btn-app-primary py-2' style={{minHeight: "4rem", minWidth: "15rem", margin: "10px"}} onClick={handleShopplan1}>Join for free</button>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "4rem", minWidth: "15rem", margin: "10px"}} onClick={handleShopplan2}>Become a supporter</button>
                    <button className='btn btn-app-black py-2 position-relative' style={{minHeight: "4rem", minWidth: "15rem", margin: "10px"}} onClick={handleShopplan3}>Become a founder contributor</button>
                </div>
            </section>
        </div>
    );
};

export default ShopPlanModal;
