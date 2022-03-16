import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {

    return (
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
                              currency_code: "USD",
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
    );
}