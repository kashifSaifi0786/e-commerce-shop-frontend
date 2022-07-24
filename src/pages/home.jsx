import Announcement from "../components/announcement";
import Categories from "../components/categories";
import Footer from "../components/footer";
import NewsLetter from "../components/newsLetter";
import Slider from "../components/slider";
import Navbar from "./../components/navbar";
import Products from "./../components/products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
