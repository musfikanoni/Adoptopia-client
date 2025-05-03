import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ab1 from '../../../assets/Home/ab.webp';
import ab2 from '../../../assets/Home/ab-2.jpg';
import { MotionValue } from "motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const AboutUs = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,
        });
      }, []);

    return (
        <div className="my-20">
            <SectionTitle subHeading={'About Us'}
            heading={'Bringing Pets and People Together with Love and Care'}
            ></SectionTitle>

            <div  className="h-[100vh] about-banner object-fill bg-cover w-full bg-no-repeat bg-fixed relative">
                <div className="mix-blend-darken h-[100vh]
                    bg-slate-900 opacity-60 relative"></div>
                {/* <Cover subHeading={'Pet Donation Campaigns'} heading={'Support Our Pet Donation Campaigns!'}></Cover> */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between max-w-screen-xl mx-auto">
                    <div>
                        <h2 className="lg:text-5xl text-3xl font-bold absolute text-white top-10 lg:top-28">Adoptopia: <br /> Connecting Hearts, <br /> One Pet at a Time</h2>
                        <p className="text-xl absolute text-white top-48 lg:top-72">At Adoptopia, we believe that every pet deserves a loving home. <br /> Our mission is to bridge the gap between abandoned or <br /> homeless pets  and compassionate individuals looking to welcome <br /> a new furry friend into  their lives. Whether you're a first-time <br /> pet owner or an experienced caretaker,  we're here to guide you  <br /> in finding your perfect companion.</p>
                    </div>
   
                    <div className="lg:ml-28">
                        <img className="lg:top-20 top-[520px] absolute max-w-lg lg:right-64 md:h-auto h-48 rounded-lg" src={ab1} alt="" />
                        <img className="lg:top-[325px] md:top-[750px] top-[650px] right-40 lg:right-36 absolute lg:h-52 md:h-36 h-28 rounded-lg" src={ab2} alt="" />
                    </div>
            
                </div>
            </div> 
            
        </div>
    );
};

export default AboutUs;