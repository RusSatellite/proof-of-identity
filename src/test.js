import { PayPalScriptProvider, PayPalButtons, } from "@paypal/react-paypal-js";


export default function App() {
	return (
		<PayPalScriptProvider
                options={{
                    "client-id": "test",
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
                                        currency_code: "USD",
                                        value: "2",
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            console.log(data);
                            console.log(orderId);
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        console.log(data);
                    });
                }}
            />
			</PayPalScriptProvider>
	);
}