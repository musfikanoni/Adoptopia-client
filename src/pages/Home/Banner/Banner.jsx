// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import img1 from '../../../assets/Home/banner-1.webp';
// import img2 from '../../../assets/Home/banner-2.jpg';
// import img3 from '../../../assets/Home/Banner-3.jpg';
import hero from '../../../assets/bg-banner/banner.mp4';



const Banner = () => {
    return (
        <div>
                <div className="relative h-[60vh] md:h-[75vh] lg:h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={hero}
        autoPlay
        loop
        muted
      />
</div>
      {/* Overlay */}
      <div className="absolute inset-0 lg:h-[90vh] h-[60vh] md:h-[75vh] bg-black/40"></div>
            {/* <Carousel  autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
                <div className="md:h-[100vh]">
                    <img src={img1} />
                </div>
                <div className="md:h-[100vh]">
                    <img src={img2} />
                </div>
                <div className="md:h-[100vh]">
                    <img src={img3} /> 
                </div>
            </Carousel> */}
        </div>
    );
};




export default Banner;