import React from "react";

import { ChakraProvider, Flex, Button, Text } from "@chakra-ui/react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import axios from 'axios';

export default function App() {
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

  const onCoinbase = (e) => {
    e.preventDefault();
    const price = { amount: '500' };
    axios.post('https://humanincome.org/api/mainnet/coinbase/pay', price)
    .then(res => {
        if (res.data.success) {
            window.open(res.data.data.hosted_url, "_parent");
        }
    });
  }

  // Using sandbox for testing only
  let env = "sandbox";
  // Let's set our currency here
  let currency = "USD";
  // Testing total amount
  let total = 10;

  const client = {
    sandbox: "ASKubZJSMqA7_0E2HE3yRKIej3xO92wyK6j6PKSfyyDZljGO23sh_xnOyHH7wIYHR2nPSLZjTZiihw6B"
  };

  return (
    <ChakraProvider>
      <Flex
        margin={4}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          padding={4}
          width="300px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderWidth="2px"
          borderRadius="lg"
        >
          <Text fontWeight="bold" margin={3}>€500.00 with Paypal</Text>
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
        </Flex>
        <Flex
          padding={4}
          marginTop="27px"
          width="300px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderWidth="2px"
          borderRadius="lg"
        >
          <Text fontWeight="bold" margin={3}>€500.00 with Coinbase</Text>
          <Button
            style={{
              backgroundColor: "#ffc439",
              width: "95%",
              color: "black",
              borderRadius: "3px",
              height: "35px"
            }}
            onClick={onCoinbase}
          >
            Coinbase Checkout
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
