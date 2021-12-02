import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BagItem from "../components/BagItem";
import OrderSum from "../components/OrderSum";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userRequest } from "../requests";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: auto;
`;

const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Bag = styled.div`
  flex: 2;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 200;
  margin-bottom: 20px;
`;

const Cart = () => {
  const bag = useSelector((state) => state.bag);
  // const [bag, setBag] = useState(storedBag);
  // useEffect(() => {
  //   setBag(storedBag);
  // }, [storedBag]);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Bottom>
          <Bag>
            {bag.products.map((product) => (
              <BagItem
                key={product._id}
                product={product}
                bag={bag}
                user={user}
              />
            ))}
          </Bag>
          <OrderSum bag={bag} />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
