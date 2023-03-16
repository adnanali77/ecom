import { imageURL } from '../../Constants/data.js'
import './BannerSection.css';

const BannerSection = () => {
  return (
    <div className='mainBannerSection' key={imageURL.id}>
        <div className='bannerSection'>
            {
                imageURL.map(image=>(
                    <img key={imageURL.id} src={image.url} alt='image'/>
                ))
            }
        </div>
    </div>
  )
}

export default BannerSection;