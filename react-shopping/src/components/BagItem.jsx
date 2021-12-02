import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { userRequest } from "../requests";
import { useDispatch } from "react-redux";
import { initialize } from "../redux/cartRedux";

const Container = styled.div`
  background-color: #ffffff;
  height: 200px;
  width: 100%;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 20px;
  position: relative;
`;
const ImgContainer = styled.div`
  height: 200px;
  width: 200px;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
const InfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.p``;
const Price = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Params = styled.div``;
const Select = styled.select`
  cursor: pointer;
  padding: 5px;
  border: none;
  background-color: transparent;
  margin-right: 20px;
  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;
const Remove = styled.div`
  cursor: pointer;
  color: #333333;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  &:hover {
    background-color: #ececec;
  }
`;

const BagItem = ({ product, bag, user }) => {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useDispatch();

  const handleSettings = async (setting, e) => {
    await userRequest.put(
      `bagProducts/${user._id}/${product._id}`,
      {
        [setting]: e.target.value,
      },
      {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      }
    );

    // let bagCopy;
    // bagCopy = [...bag.products];
    // console.log([...bag.products]);
    // let productCopy;
    // productCopy = bagCopy.find(
    //   (productCopy) => productCopy._id === product._id
    // );
    // if (setting === "quantity") {
    //   console.log(productCopy);
    // } else if (setting === "color") {
    //   console.log(productCopy.color);
    // } else {
    //   console.log((productCopy.size = e.target.value));
    // }
    // // productCopy.setting = e.target.value;
    // dispatch(initialize(bagCopy));
  };

  const handleRemove = async () => {
    const ID = product._id;
    dispatch(initialize(bag.products.filter((product) => product._id !== ID)));
    await userRequest.delete(`bagProducts/${product.bagId}`, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
  };

  return (
    <Container>
      <Link to={"product/" + product._id}>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
      </Link>
      <InfoContainer>
        <div>
          <Price>$ {product.price}</Price>
          <Title>{product.title}</Title>
        </div>

        <Params>
          <Select onChange={(e) => handleSettings("color", e)}>
            {product.colors.map((color) => (
              <Option selected={color === product.color} key={color}>
                {color}
              </Option>
            ))}
          </Select>
          <Select onChange={(e) => handleSettings("size", e)}>
            {product.sizes.map((size) => (
              <Option selected={size === product.size} key={size}>
                {size}
              </Option>
            ))}
          </Select>
          <Select onChange={(e) => handleSettings("quantity", e)}>
            {quantities.map((q) => (
              <Option key={q} selected={q === product.quantity}>
                {q}
              </Option>
            ))}
          </Select>
        </Params>
        <Remove onClick={handleRemove}>
          <ClearIcon />
        </Remove>
      </InfoContainer>
    </Container>
  );
};

export default BagItem;
