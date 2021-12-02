import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid lightgray;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Select = styled.select`
  margin: 0px 20px;
  /* border: 1px solid gray;*/
  border: none;
  border-bottom: 1px solid gray;
  /* border-radius: 500px; */
  &:focus {
    outline: none;
  }
  background-color: white;
  padding: 5px 10px;
  width: 200px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({ color: "all" });
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <FilterContainer>
        <Filter>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value="all">All</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Sort</Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        title={category.toUpperCase()}
        category={category}
        filters={filters}
        sort={sort}
      />
    </Container>
  );
};

export default ProductList;
