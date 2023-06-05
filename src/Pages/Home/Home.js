import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/Featured/Featured";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import FeaturedCollection from "../../Components/FeaturedCollection/FeaturedCollection";
import About from "../../Components/About/About";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProducts";
import HomeBrands from "../../Components/HomeBrands/HomeBrands";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const { loading } = useContext(ThemeContext);
  return (
    <div className="home">
      <div>
        <Banner></Banner>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[90vh]">
          <ThreeDots
            height="100"
            width="100"
            radius="10"
            color="#cb9815"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className="2xl:w-[65%] md:w-[75%] mx-auto">
          <Featured></Featured>
          <NewArrivals></NewArrivals>
          <FeaturedCollection></FeaturedCollection>
          <SpecialProducts />
          <HomeBrands />
          <About></About>
        </div>
      )}
    </div>
  );
};

export default Home;
