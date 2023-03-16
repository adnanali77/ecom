import './Home.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Slider from '../../components/Slider/Slider';
import ItemSlider from '../../components/ItemSlider/ItemSlider';
import FirstSlider from "../../components/FirstSlider/FirstSlider.jsx";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";

const Home = ({products}) => {

  return (
    <div className='mainHome'>
      <NavBar/>
      <div className='components'>
        <Slider/>
        <div className="productsSlides">
          <FirstSlider products = {products} title='Deals of the Day'/>
          <BannerSection />
          <ItemSlider products = {products} title='Suggested Items'/>
          <ItemSlider products = {products} title='Top Selection'/>
          <ItemSlider products = {products} title='Recommended Items'/>
        </div>
      </div>
    </div>
  )
}

export default Home;