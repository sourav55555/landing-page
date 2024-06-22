import Banner from "./components/banner/Banner";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PopularCategory from "./components/popularCategory/PopularCategory";
import PopularProduct from "./components/popularProduct/PopularProdcut";
import Review from "./components/review/Review";
import Subscribe from "./components/subscribe/Subscribe";

const App = () => {
  return (
    <div className='vistara-regular text-[var(--primary)] overflow-x-hidden'>

      <Navbar/>
      <Banner/>
      <Featured/>
      <PopularCategory/>
      <PopularProduct/>
      <Review/>
      <Subscribe/>
      <Footer/>

    </div>
  );
};

export default App;
