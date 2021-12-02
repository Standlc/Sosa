import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { sliderData } from "../SlideData";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "30px"};
  right: ${(props) => props.direction === "right" && "30px"};
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1000ms;
`;
const SliderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: #${(props) => props.bg};
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const Title = styled.h1`
  font-size: 60px;
  color: white;
  text-align: center;
`;
const Button = styled.button`
  padding: 10px 40px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid white;
  font-size: 20px;
  color: white;
  font-size: 25px;
  transition: all 500ms;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon style={{ fontSize: 50, color: "white" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderData.map((item) => (
          <SliderItem key={item.id}>
            <Image src={item.img} />
            <InfoContainer>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </SliderItem>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon style={{ fontSize: 50, color: "white" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
