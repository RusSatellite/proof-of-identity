import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import axios from 'axios'

const Payment2 = () => {

    const [show, setShow] = useState(false);

    const handlePaypal = async(e) => {
        e.preventDefault();
        setShow(!show);
    }

    const handleCoinbase = async(e) => {
        e.preventDefault();
        const price = { amount: '500' };
        axios.post('https://humanincome.org/api/mainnet/coinbase/pay', price)
        .then(res => {
            if (res.data.success) {
                window.open(res.data.data.hosted_url, "_parent");
            }
        });
    }

    return (
        <div>
            <div className="app-content-height d-flex flex-column align-items-center justify-content-center payment-modal-main">
                <div className="fw-600 fs-2p0 cod-gray">You will pay 500€ with</div>
                <div>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "3rem", minWidth: "6rem", margin: "10px"}} onClick={handlePaypal}>Paypal</button>
                    <button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "3rem", minWidth: "6rem", margin: "10px"}} onClick={handleCoinbase}>Coinbase</button>
                </div>
                {
                    show && 
                    <PayPalScriptProvider
                        options={{
                            "client-id": "AV1hGBARJo3cQMMhODOuVhH1XMQSRlUCtE3ogDRfGskShI39eu1aJbjs63xd8U4PXH3dpLYBtBqluHf7",
                        }}
                    >
                        <PayPalButtons
                            fundingSource='paypal'
                            createOrder={(data, actions) => {
                                return actions.order
                                .create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: "EUR",
                                                value: "500",
                                            },
                                        },
                                    ],
                                })
                                .then((orderId) => {
                                    // Your code here after create the order
                                    console.log('data', data);
                                    console.log('orderID', orderId);
                                    return orderId;
                                });
                            }}
                            onApprove={function (data, actions) {
                                return actions.order
                                .capture()
                                .then(function () {
                                    console.log('Approve Data', data);
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                }
            </div>
        </div>
    );
};

export default Payment2;