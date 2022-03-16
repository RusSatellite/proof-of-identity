import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const Payment1 = () => {

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [show, setShow] = useState(false);

    const handlePaypal = async(e) => {
        e.preventDefault();
        setShow(!show);
    }

    const handleCoinbase = async(e) => {
        e.preventDefault();
        // const result = await coinbaseService({
        //     amount: value,
        // });
        // if ("errors" in result) {
        //     console.log(result.errors);
        // } else {
        //     window.location.href =  result.data.hosted_url;
        // }
    }

     // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
        .create({
            purchase_units: [
            {
                description: "Sunflower",
                amount: {
                    currency_code: "EUR",
                    value: 20,
                },
            },
            ],
            // not needed if a shipping address is actually needed
            application_context: {
                shipping_preference: "NO_SHIPPING",
            },
        })
        .then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };
    
    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
        const { payer } = details;
        setSuccess(true);
        });
    };
    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };
    return (
        <div>
            <div className="app-content-height d-flex flex-column align-items-center justify-content-center payment-modal-main">
                <div className="fw-600 fs-2p0 cod-gray">You will pay 20€ with</div>
                <div>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "3rem", minWidth: "6rem", margin: "10px"}} onClick={handlePaypal}>Paypal</button>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "3rem", minWidth: "6rem", margin: "10px"}} onClick={handleCoinbase}>Coinbase</button>
                </div>
                {
                    show && 
                    <PayPalScriptProvider options={{ "client-id": "Af0Nf7eoh0BP5aTWkogs2R4R3t5GzIImmVx8bypvuvnWQkIeAbhxyOyuV-E7_Exg03k7Qf4HEqEYBR6c" }}>
                        <PayPalButtons
                        style={{ layout: "vertical" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                        />
                    </PayPalScriptProvider>
                }
            </div>
        </div>
    );
};

export default Payment1;