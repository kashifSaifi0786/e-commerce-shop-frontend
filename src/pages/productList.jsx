import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NewsLetter from "../components/newsLetter";
import Products from "../components/products";
import Announcement from "./../components/announcement";

const Container = styled.div``;

const ProductList = () => {
  window.scroll(0, 0);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
