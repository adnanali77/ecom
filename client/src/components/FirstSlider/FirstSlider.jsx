import ItemSlider from '../ItemSlider/ItemSlider.jsx';
import './FirstSlider.css';

const FirstSlider = ({ products, title }) => {
    const adimg = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div className="addComponent">
            <div className="customleft">
                <ItemSlider products = {products} title = {title} />
            </div>
            <div className="customright">
                <img src={adimg}/>
            </div>
        </div>
    )
}

export default FirstSlider;