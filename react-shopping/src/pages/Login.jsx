import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a1afec;
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
    color: #a1afec;
  }
`;
const StyledLink = styled(Link)`
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  font-size: ${(props) => (props.fontSize === "big" ? "22px" : "15px")};
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    console.log(user);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>SOSA.</Logo>
        <Title>Sign in your account</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>SIGN IN</Button>
        </Form>
        <StyledLink to="" className="link" fontSize="small">
          Forgot your password ?{" "}
        </StyledLink>
        <p style={{ fontSize: "15px", textAlign: "center" }}>or</p>
        <StyledLink to="/register" className="link" fontSize="big">
          CREATE AN ACCOUNT
        </StyledLink>
      </Wrapper>
    </Container>
  );
};

export default Login;
