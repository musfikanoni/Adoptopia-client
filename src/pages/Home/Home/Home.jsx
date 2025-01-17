import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Adoptopia | Home</title>
            </Helmet>
            <Banner></Banner>
            
            <div className="max-w-screen-xl mx-auto">
                <Category></Category>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;