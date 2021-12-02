import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest, userRequest } from "../requests";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  padding: 50px;
`;
const ImageContainer = styled.div`
  flex: 2;
  height: 600px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  padding: 0px 30px;
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 20px;
`;
const Desc = styled.p``;
const Price = styled.h1`
  font-weight: 200;
`;

const Hl = styled.div`
  height: 1px;
  width: 100%;
  background-color: lightgray;
  margin: 15px 0px;
`;
const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-evenly;
`;

const Select = styled.select`
  width: 80px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
  background-color: transparent;
  padding: 5px;
`;
const Option = styled.option``;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 17px;
  width: 100%;
  height: 50px;
  border: 2px solid ${(props) => (props.inBag ? "gray" : "black")};
  color: ${(props) => (props.inBag ? "white" : "black")};
  background-color: ${(props) => (props.inBag ? "gray" : "transparent")};
`;
const Message = styled.p`
  font-size: 12px;
  color: #ff0000;
  text-align: center;
`;
const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;

const SingleProduct = ({ likedProducts, setLikedProducts }) => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [colorChoosen, setColorChoosen] = useState(null);
  const [sizeChoosen, setSizeChoosen] = useState(null);
  const dispatch = useDispatch();
  const storedBag = useSelector((state) => state.bag);
  const [product, setProduct] = useState({});
  const [inBag, setInBag] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const [liked, setLiked] = useState(
    likedProducts.find((likedProduct) => likedProduct._id === productId) !==
      undefined
  );

  useEffect(() => {
    setLiked(
      likedProducts.find((likedProduct) => likedProduct._id === productId) !==
        undefined
    );
  }, [likedProducts]);

  useEffect(() => {
    setInBag(
      storedBag.products.filter((bagProduct) => bagProduct._id === productId)
        .length !== 0
    );
  }, [storedBag]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + productId);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [productId]);
  //LOCAL STORAGE
  // const [bag, setBag] = useState([]);
  // useEffect(() => {
  //   setBag(JSON.parse(localStorage.getItem("bag")));
  // }, []);
  const [chooseMessage, setChooseMessage] = useState(false);

  const handleProductToBag = async () => {
    if (colorChoosen && sizeChoosen) {
      setChooseMessage(false);
      const res = await userRequest.post(
        "/bagProducts",
        {
          userId: user._id,
          productId: product._id,
          color: colorChoosen,
          size: sizeChoosen,
        },
        {
          headers: {
            token: "Bearer " + user.accessToken,
          },
        }
      );
      setInBag(true);
      const newProduct = {
        ...product,
        bagId: res.data._id,
        color: colorChoosen,
        size: sizeChoosen,
        quantity: 1,
      };
      dispatch(addProduct(newProduct));
    } else {
      setChooseMessage(true);
    }
  };
  const handleLike = async (type) => {
    setLiked(!liked);
    if (type === "like") {
      setLikedProducts([...likedProducts, { ...product }]);
      await userRequest.post(
        "/likedProducts",
        {
          userId: user._id,
          productId: product._id,
        },
        {
          headers: {
            token: "Bearer " + user.accessToken,
          },
        }
      );
    } else {
      setLikedProducts(
        likedProducts.filter((likedProduct) => likedProduct._id !== product._id)
      );

      await userRequest.delete(
        "/likedProducts",
        {
          userId: user._id,
          productId: product._id,
        },
        {
          headers: {
            token: "Bearer " + user.accessToken,
          },
        }
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          {/* <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc> */}
          <Price>$ {product.price}</Price>
          <Hl />
          {chooseMessage && <Message>Please choose a color and size.</Message>}
          <FilterContainer>
            <Select onChange={(e) => setColorChoosen(e.target.value)}>
              <Option disabled selected>
                Color
              </Option>
              {product.colors?.map((color) => (
                <Option key={color}>{color}</Option>
              ))}
            </Select>
            <Select onChange={(e) => setSizeChoosen(e.target.value)}>
              <Option disabled selected>
                Size
              </Option>
              {product.sizes?.map((size) => (
                <Option key={size}>{size}</Option>
              ))}
            </Select>
          </FilterContainer>
          <LikeContainer>
            {liked ? (
              <Like onClick={() => handleLike("unlike")}>
                <FavoriteIcon fontSize="large" />
              </Like>
            ) : (
              <Like onClick={() => handleLike("like")}>
                <FavoriteBorderIcon fontSize="large" />
              </Like>
            )}
            {inBag ? (
              <Button inBag={true} onClick={handleProductToBag}>
                ADDED TO BAG <CheckIcon style={{ marginLeft: "10px" }} />
              </Button>
            ) : (
              <Button inBag={false} onClick={handleProductToBag}>
                ADD TO BAG
              </Button>
            )}
          </LikeContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
