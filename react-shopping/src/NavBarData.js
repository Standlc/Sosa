import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

export const noUserLinks = [
  {
    title: "No User",
    icon: <AccountCircleIcon fontSize="large" />,
    subLinks: [
      {
        icon: <AccountCircleIcon color="black" />,
        path: "/login",
        title: "Login",
      },
      {
        icon: <ShoppingCartOutlinedIcon />,
        path: "/",
        title: "My Orders",
      },
      {
        icon: <ShoppingCartOutlinedIcon />,
        path: "/",
        title: "My Returns",
      },
    ],
  },
];

export const userLinks = [
  {
    title: "User",
    icon: <AccountCircleIcon fontSize="large" />,
    subLinks: [
      {
        icon: <AccountCircleIcon color="black" />,
        path: "/account",
        title: "My Account",
      },
      {
        icon: <ShoppingCartOutlinedIcon />,
        path: "/",
        title: "My Orders",
      },
      {
        icon: <ShoppingCartOutlinedIcon />,
        path: "/",
        title: "My Returns",
      },
      {
        icon: <LogoutIcon />,
        path: "/",
        title: "Logout",
      },
    ],
  },
];
