import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.div`
  background-color: #f0f0f0;
`;
const InfoContainer = styled.div`
  display: flex;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
`;
const Left = styled.div`
  flex: 1;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
const SocialIcon = styled.div`
  background-color: #${(props) => props.color};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`;
const Hl = styled.div`
  height: 30px;
  width: 1px;
  background-color: #8a8a8a;
`;
const PaymentIcon = styled.img`
  height: 30px;
  margin: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  color: #1d1d1d;
`;
const Right = styled.div`
  flex: 1;
`;
const FooterLink = styled.p`
  font-size: 13px;
  color: #353535;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Footer = () => {
  return (
    <Container>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <InstagramIcon />
        </SocialIcon>
        <Hl />
        <PaymentIcon src="https://images.asos-media.com/navigation/visa-png" />
        <PaymentIcon src="https://images.asos-media.com/navigation/mastercard-png" />
        <PaymentIcon src="https://images.asos-media.com/navigation/pay-pal-png" />
        <PaymentIcon src="https://images.asos-media.com/navigation/american-express-png" />
      </SocialContainer>
      <InfoContainer>
        <Left>
          <Title>ABOUT SOSA.</Title>
          <FooterLink>About us</FooterLink>
          <FooterLink>Work with us</FooterLink>
          <FooterLink>Policies</FooterLink>
          <FooterLink>Cyber Security</FooterLink>
        </Left>
        <Center>
          <Title>HELP & INFORMATION</Title>
          <FooterLink>Help</FooterLink>
          <FooterLink>Track order</FooterLink>
          <FooterLink>Delivery & returns</FooterLink>
          <FooterLink>Premier Delivery</FooterLink>
        </Center>
        <Right>
          <Title>CONTACT</Title>
          <FooterLink>303 cours Lafayette, Lyon</FooterLink>
          <FooterLink>04 53 84 12 46 71</FooterLink>
          <FooterLink>sosa@contact.mail</FooterLink>
        </Right>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
