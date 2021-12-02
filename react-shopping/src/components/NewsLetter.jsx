import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffa285;
  color: white;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Description = styled.p`
  font-size: 25px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 0px 20px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates on your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Email" type="email" />
        <Button>
          <SendIcon style={{ color: "#ff8d6b" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
