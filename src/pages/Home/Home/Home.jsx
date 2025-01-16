import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="h-[100vh]">
            <Helmet>
                <title>Adoptopia | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;