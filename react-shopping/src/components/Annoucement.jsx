import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 40px;
  background-color: #009c9c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 70px;
  z-index: 99;
  ${mobile({ height: "60px", backgroundColor: "black", top: "60px" })}
`;

const Annoucement = () => {
  return <Container>NEW HERE? Get 10% off* with code: HIFRIEND !</Container>;
};

export default Annoucement;
