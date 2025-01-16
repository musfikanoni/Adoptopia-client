import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../../assets/Home/banner-1.webp';
import img2 from '../../../assets/Home/banner-2.jpg';
import img3 from '../../../assets/Home/Banner-3.jpg';



const Banner = () => {
    return (
        <div>
            <Carousel  autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
                <div className="md:h-[100vh]">
                    <img src={img1} />
                </div>
                <div className="md:h-[100vh]">
                    <img src={img2} />
                </div>
                <div className="md:h-[100vh]">
                    <img src={img3} /> 
                </div>
            </Carousel>
        </div>
    );
};




export default Banner;