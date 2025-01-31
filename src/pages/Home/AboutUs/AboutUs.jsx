import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ab1 from '../../../assets/Home/ab.webp';
import ab2 from '../../../assets/Home/ab-2.jpg';


const AboutUs = () => {
    return (
        <div className="my-20">
            <SectionTitle subHeading={'About Us'}
            heading={'Bringing Pets and People Together with Love and Care'}
            ></SectionTitle>

            <div  className="h-[90vh] about-banner object-fill bg-cover w-full bg-no-repeat bg-fixed relative">
                            <div className="mix-blend-darken h-[90vh]
                                bg-slate-900 opacity-60 relative"></div>
                {/* <Cover subHeading={'Pet Donation Campaigns'} heading={'Support Our Pet Donation Campaigns!'}></Cover> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between max-w-screen-xl mx-auto">
                    <div>
                        <h2 className="text-5xl font-bold absolute text-white top-28 z-10">Adoptopia: <br /> Connecting Hearts, <br /> One Pet at a Time</h2>
                        <p className="text-xl absolute text-white top-72 z-10">At Adoptopia, we believe that every pet deserves a loving home. <br /> Our mission is to bridge the gap between abandoned or <br /> homeless pets  and compassionate individuals looking to welcome <br /> a new furry friend into  their lives. Whether you're a first-time <br /> pet owner or an experienced caretaker,  we're here to guide you  <br /> in finding your perfect companion.</p>
                    </div>
   
                    <div className="z-10 lg:ml-28">
                        <img className="top-20 absolute max-w-lg right-64 rounded-lg" src={ab1} alt="" />
                        <img className="top-[325px] right-36 absolute h-52 rounded-lg" src={ab2} alt="" />
                    </div>
            
                </div>
            </div> 
            
        </div>
    );
};

export default AboutUs;