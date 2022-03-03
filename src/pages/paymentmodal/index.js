import './modal.css';
import { useDispatch, useSelector } from "react-redux";
import { CloseButton } from 'react-bootstrap';
import * as Actions from "../../store/actions";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentModal = () => {

    const dispatch = useDispatch();
    const state = useSelector(({fuse}) => fuse.payment_modal.state);
    const value = useSelector(({fuse}) => fuse.payment_modal.value);

    const showHideClassName = state ? "payment-modal display-block" : "payment-modal display-none";

    const handleClose = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_payment_modal());
    }

    const handlePaypal = (e) => {
        e.preventDefault();
        dispatch(Actions.hide_payment_modal());
    }

    const handleCoinbase = async(e) => {
        e.preventDefault();
        dispatch(Actions.hide_payment_modal());
        // const result = await coinbaseService({
        //     amount: value,
        // });
        // if ("errors" in result) {
        //     console.log(result.errors);
        // } else {
        //     window.location.href =  result.data.hosted_url;
        // }
    }

    // const createOrder = (data, actions) => {
    //     return actions.order.create({
    //         purchase_units: [
    //         {
    //             amount: {
    //             value: "0.01",
    //             },
    //         },
    //         ],
    //     });
    // }
    // const onApprove = (data, actions) => {
    //     return actions.order.capture();
    // }
    return (
        <div className={showHideClassName}>
            <div className="app-content-height d-flex flex-column align-items-center justify-content-center payment-modal-main">
                <div className="fw-600 fs-2p0 cod-gray">You will pay {value} € with<CloseButton onClick={handleClose}/></div>
                <div>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "3rem", minWidth: "6rem", margin: "10px"}} onClick={handlePaypal}>Paypal</button>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "3rem", minWidth: "6rem", margin: "10px"}} onClick={handleCoinbase}>Coinbase</button>
                </div>
                {/* <PayPalScriptProvider options={{ "client-id": "Af0Nf7eoh0BP5aTWkogs2R4R3t5GzIImmVx8bypvuvnWQkIeAbhxyOyuV-E7_Exg03k7Qf4HEqEYBR6c" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider> */}
                
            </div>
        </div>
    );
};

export default PaymentModal;