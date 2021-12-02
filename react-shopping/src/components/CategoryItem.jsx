import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-width: 250px;
  max-width: 600px;
  height: 500px;
  flex: 1;
  margin: 5px;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1000ms;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const Title = styled.h1`
  color: white;
  font-size: 40px;
`;
const Button = styled.button`
  border: 2px solid white;
  background-color: transparent;
  font-size: 20px;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={"/products/" + item.title.toLowerCase()}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
