import { useEffect, useState } from "react";
import styled from "styled-components";
// import { products } from "../SlideData";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  padding-top: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  margin: 50px;
  font-weight: 500;
  color: #1f1f1f;
`;
const NoResultMessage = styled.div`
  background-color: whitesmoke;
  color: #1f1f1f;
  width: 500px;
  font-weight: 400;
  font-size: 40px;
  text-align: center;
  margin-bottom: 35px;
  border-radius: 25px;
  padding: 15px;
`;

const Products = ({ title, category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        window.scrollTo(0, 0);
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  //APPLY FILTERS
  useEffect(() => {
    category &&
      setFilteredProducts(
        filters.color === "all"
          ? products
          : products.filter((item) =>
              //   Object.entries(filters).every(([key, value]) =>
              //     item[key].includes(value)
              item.categories.includes(filters.color)
            )
      );
  }, [category, filters, products]);

  //SORT PRODUCTS
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <Title>{title}</Title>
      {products.length === 0 && (
        <NoResultMessage>
          Sorry, we couldn't find any results for that search...
        </NoResultMessage>
      )}
      <ProductsContainer>
        {filteredProducts.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Products;
