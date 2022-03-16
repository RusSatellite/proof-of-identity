import PaypalExpressBtn from "react-paypal-express-checkout";
import { useState } from "react";
import axios from 'axios';

const Payment1 = () => {

    const [show, setShow] = useState(false);

    const handlePaypal = async(e) => {
        e.preventDefault();
        setShow(!show);
    }

    const handleCoinbase = async(e) => {
        e.preventDefault();
        const price = { amount: '20' };
        axios.post('https://humanincome.org/api/mainnet/coinbase/pay', price)
        .then(res => {
            if (res.data.success) {
                window.open(res.data.data.hosted_url, "_parent");
            }
        });
    }

    const onSuccess = (payment) => {
        // Congratulations, the payment was successful!
        console.log("The payment was successful!", payment);
    };

    const onCancel = (data) => {
        // User pressed 'cancel' or closed the PayPal popup window
        console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
        // The main PayPal 's script can't be loaded
        console.log("Error!", err);
    };

    // Using sandbox for testing only
    let env = "sandbox";
    // Let's set our currency here
    let currency = "EUR";
    // Testing total amount
    let total = 20;

    const client = {
        sandbox: "AV1hGBARJo3cQMMhODOuVhH1XMQSRlUCtE3ogDRfGskShI39eu1aJbjs63xd8U4PXH3dpLYBtBqluHf7"
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
                    <PaypalExpressBtn
                        env={env}
                        client={client}
                        currency={currency}
                        total={total}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel}
                        style={{ shape: "rect", size: "medium", margin: "1.5rem" }}
                    />
                }
            </div>
        </div>
    );
};

export default Payment1;