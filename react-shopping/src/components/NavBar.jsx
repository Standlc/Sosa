import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRequest } from "../requests";
import { initialize } from "../redux/cartRedux";
import NavBarLinks from "./NavBarLinks";
import { noUserLinks, userLinks } from "../NavBarData";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  height: 70px;
  ${mobile({ height: "60px" })}
`;
const Wrapper = styled.div`
  height: 100%;
  max-width: 1500px;
  margin: auto;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px 15px" })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchBar = styled.div`
  width: 220px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0px 10px;
  ${mobile({ marginLeft: "0", width: "150px" })}
`;
const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 90%;
  padding-left: 15px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h1`
  font-size: 45px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
const MenuLink = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NavBar = () => {
  const bag = useSelector((state) => state.bag);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput !== "") {
    }
  };

  useEffect(() => {
    const getBag = async () => {
      const res = await userRequest.get("/bagProducts/" + user._id, {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      });
      res.data.length > 0 && dispatch(initialize(res.data));
    };
    user && getBag();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchBar>
            <SearchInput placeholder='Search something' onChange={(e) => setSearchInput(e.target.value)} />
            <Link
              className="link"
              to={searchInput !== "" ? "/products/" + searchInput : "/"}
            >
              <SearchIcon
                type="submit"
                style={{ fontSize: 25, cursor: "pointer" }}
              />
            </Link>
          </SearchBar>
        </Left>
        <Center>
          <Link className="link" to="">
            <Logo>SOSA.</Logo>
          </Link>
        </Center>
        <Right>
          {user
            ? userLinks.map((link) => (
                <NavBarLinks key={link.title} link={link} />
              ))
            : noUserLinks.map((link) => (
                <NavBarLinks key={link.title} link={link} />
              ))}
          <Link className="link" to="/cart">
            <MenuLink>
              <Badge badgeContent={bag.products.length} color="primary">
                <ShoppingCartOutlinedIcon color="black" fontSize="large" />
              </Badge>
            </MenuLink>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
