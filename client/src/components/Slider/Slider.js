import { bannerData } from '../../Constants/data.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Slider.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slider = () => {
  return (
    <div className='mainSlider'>
        <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                bannerData.map(data => (
                  <div key={data.id}>
                    <img src={data.url} alt='banner'/>
                  </div>
                ))
            }
        </Carousel>
    </div>
    
  )
}

export default Slider;