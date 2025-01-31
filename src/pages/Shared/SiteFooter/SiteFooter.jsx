import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import footerLogo from '../../../assets/site-logo.png';

const SiteFooter = () => {
    return (
        <div>
            <Footer container className=" rounded-none bg-black">
            <div className="w-full ">
                <div className="grid max-w-screen-xl mx-auto justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="w-6/12 lg:ml-4 py-8">
                        <div className="flex  items-center gap-5">
                            <img className="h-16" src={footerLogo} alt="" />
                            <h2 className="text-3xl font-bold text-white">Adoptopia</h2>
                        </div>
                        <p className="text-white">Find your perfect furry friend with our pet adoption website! Browse loving pets in need of a home and give them a second chance. Adopt, don’t shop—start your journey today!</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                        <Footer.Title title="about" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Our Services</Footer.Link>
                            <Footer.Link href="#">Caring Process</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Follow us" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Github</Footer.Link>
                            <Footer.Link href="#">Discord</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div className="lg:mr-7">
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                    <div className="max-w-screen-xl mx-auto">
                    <Footer.Divider />
                        <div className="w-full sm:flex sm:items-center sm:justify-between">
                            <Footer.Copyright href="#" by="Adoptopia. All rights reserved™" year={2025} />
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon href="#" icon={BsFacebook} />
                                <Footer.Icon href="#" icon={BsInstagram} />
                                <Footer.Icon href="#" icon={BsTwitter} />
                                <Footer.Icon href="#" icon={BsGithub} />
                                <Footer.Icon href="#" icon={BsDribbble} />
                            </div>
                        </div>
                    </div>
            </div>
            </Footer>
        </div>
    );
};

export default SiteFooter;