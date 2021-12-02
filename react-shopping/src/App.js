import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Annoucement from "./components/Annoucement";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { userRequest } from "./requests";
import { useState } from "react";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [likedProducts, setLikedProducts] = useState([]);
  useEffect(() => {
    const getLikedProducts = async () => {
      const res = await userRequest.get("/likedProducts/" + user._id, {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      });
      setLikedProducts(res.data);
      console.log(res.data);
    };
    user && getLikedProducts();
  }, [user]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Annoucement />
          <Home />
          <Footer />
        </Route>
        <Route path="/products/:category">
          <NavBar />
          <Annoucement />
          <ProductList />
          <Footer />
        </Route>
        <Route path="/product/:id">
          <NavBar />
          <Annoucement />
          <SingleProduct likedProducts={likedProducts} setLikedProducts={setLikedProducts}/>
          <Footer />
        </Route>
        <Route path="/cart">
          <NavBar />
          <Annoucement />
          <Cart />
          <Footer />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
