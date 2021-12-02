import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ecb3a1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
`;
const Logo = styled.h1`
  font-size: 55px;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Input = styled.input`
  border-radius: 10px;
  height: 50px;
  margin: 15px 0px;
  padding: 0px 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Agreement = styled.p`
  font-size: 15px;
`;
const Button = styled.button`
  background-color: transparent;
  font-weight: 500;
  color: white;
  font-size: 22px;
  letter-spacing: 1px;
  border-radius: 10px;
  height: 60px;
  margin: 15px 0px;
  padding: 0px 15px;
  border: 3px solid white;
  cursor: pointer;
  transition: all 500ms;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: white;
    color: #e69982;
  }
`;
const StyledLink = styled(Link)`
  text-align: center;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>SOSA.</Logo>
        <Title>Create your account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>.
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
        <p style={{ fontSize: "18px", textAlign: "center" }}>or</p>
        <StyledLink to='/login' className="link">SIGN IN</StyledLink>
      </Wrapper>
    </Container>
  );
};

export default Register;
