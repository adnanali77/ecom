import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ItemSlider.css';
import { Link } from 'react-router-dom';

const responsive = {
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 5
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 2
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1
}
};

const ItemSlider = ({products, title }) => {

    return (
      <div className='mainItemslide'>
      <div className='viewAll'>
        <h3>{title}</h3>
        <button className='viewAllbtn'>View All</button>
      </div>
      
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
            {
                products.map((product) => (
                  // <Link to={`/product/${product._id}`}>
                    <div key={product.id} className='productItem'>
                      <Link to={`/product/${product.id}`}>
                      <div className='card'>
                        <img src={product.url} alt='product'/>
                        <div className='container'>
                          <h4>{product.title.shortTitle}</h4>
                          <p className='price'>From ${product.price.mrp}</p>
                          <p>{product.discount}</p>
                        </div>
                      </div>
                      </Link>
                    </div>
                  // </Link>
                ))
            }
          </Carousel>
        </div>
      );
}

export default ItemSlider;