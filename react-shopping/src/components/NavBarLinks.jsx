import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

const Dropdown = styled.div`
  border-radius: 10px;
  width: 250px;
  position: absolute;
  z-index: 999;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  transition: all 200ms;
  opacity: ${(props) => (props.show === false ? 0 : 1)};
  top: ${(props) => (props.show === false ? "20px" : "40px")};
  left: -150px;
  pointer-events: ${(props) => (props.show === false ? "none" : "default")};
  cursor: default;
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
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  border-radius: 5px;
  padding: 12px;
  &:hover {
    background-color: #ececec;
  }
  transition: all 200ms;
  cursor: pointer;
  /* text-decoration: none; */
`;

const NavBarLinks = ({ link }) => {
  const [show, setShow] = useState(false);
  const menuInfo = useRef();
  const menu = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (e) => {
      if (
        !menuInfo.current.contains(e.target) &&
        !menu.current.contains(e.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    //VERY IMPORTANT
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <MenuLink>
      <div
        ref={menu}
        style={{ marginBottom: "-8px" }}
        onClick={() => setShow(!show)}
      >
        {link.icon}
      </div>
      <Dropdown ref={menuInfo} show={show}>
        {link.subLinks.map((item) => (
          <StyledLink
            onClick={async () => {
              if (item.title === "Logout") {
                await dispatch(logout());
                window.location.replace("/login");
              }
            }}
            className="link"
            to={item.path}
            key={item.title}
          >
            {item.icon}
            <span style={{ marginLeft: "10px" }}>{item.title}</span>
          </StyledLink>
        ))}
      </Dropdown>
    </MenuLink>
  );
};

export default NavBarLinks;
