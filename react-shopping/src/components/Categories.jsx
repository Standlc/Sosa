import styled from "styled-components";
import { categories } from "../SlideData";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #ffffff;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
