import styled from "styled-components";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 5px;
  width: 300px;
  margin-bottom: 20px;
`;
const Links = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000028;
  opacity: 0;
  transition: all 300ms;
`;
const Wrapper = styled.div`
  /* flex: 1; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 380px;
  background-color: #ffffff;
  position: relative;
  cursor: pointer;
  &:hover ${Links} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
// const Icon = styled.div`
//   background-color: #ffffffe8;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   margin: 10px;
//   height: 60px;
//   width: 60px;
//   &:hover {
//     transform: scale(1.1);
//   }
//   transition: all 200ms;
// `;
const Info = styled.div`
  margin-top: 10px;
`;
const Title = styled.p`
  font-size: 13px;
  font-weight: 400;
`;
const Price = styled.p``;

const Product = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} />

        <Link to={`/product/${item._id}`}>
          <Links>
            {/* <Icon>
            <AddShoppingCartIcon />
          </Icon>
          <Icon>
            <FavoriteBorderIcon />
          </Icon> */}
          </Links>
        </Link>
      </Wrapper>

      <Info>
        <Title>{item.title}</Title>
        <Price>$ {item.price}</Price>
      </Info>
    </Container>
  );
};

export default Product;
