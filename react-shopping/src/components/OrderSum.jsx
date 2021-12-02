import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";

const KEY = process.env.STRIPE_PKEY;

const Container = styled.div`
  flex: 1;
  background-color: transparent;
  margin-left: 20px;
  border: 1px solid lightgray;
  padding: 15px;
  position: sticky;
  top: 130px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 25px;
  margin-bottom: 15px;
`;
const Hl = styled.div`
  height: 1px;
  width: 100%;
  background-color: lightgray;
  margin-bottom: 15px;
`;
const SumDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const SumText = styled.p`
  font-weight: ${(props) => (props.type === "bold" ? "500" : "400")};
  font-size: 17px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  height: 50px;
  font-size: 17px;
  font-weight: 500;
  background-color: #222222;
  color: white;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: white;
    border: 1px solid #222222;
    color: #222222;
  }
`;

const OrderSum = ({ bag }) => {
  // const [stripeToken, setStripeToken] = useState(null);
  // const onToken = (token) => {
  //   setStripeToken(token);
  // };
  // console.log(stripeToken)

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      bag.products.reduce(
        (total, product) => (total = total + product.price * product.quantity),
        0
      )
    );
  }, [bag]);

  return (
    <Container>
      <Title>TOTAL</Title>
      <Hl />
      <SumDiv>
        <SumText type="bold">Sub-total</SumText>
        <SumText>$ {total}</SumText>
      </SumDiv>

      {/* <StripeCheckout
        name="SOSA"
        billingAddress
        shippingAddress
        description={`Your total is $${cart.total}`}
        amount={cart.total * 100}
        token={onToken}
        stripeKey={KEY}
      > */}
      <Button>CHECKOUT</Button>
      {/* </StripeCheckout> */}
    </Container>
  );
};

export default OrderSum;
