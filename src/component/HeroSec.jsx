
// image imported
import hero_image from "../assets/img/img_1.png"

const HeroSec = () => {
    return (
        <section id="hero" className="mt-40">
        <div className="row">
            <div className="col">
                <div className="container">
                    <div className="hero_wrapper w-full bg-gradient-to-r from-primary to-secondery rounded-lg flex justify-center">
                        <div className="hero_desc pl-4">
                            <p className="pt-24  text-black-1 font-poppins text-base text-center lg:text-left not-italic font-normal leading-[120%]">Welcome to Realstate</p>
                            <h1 className="pt-4 text-black-1 font-poppins text-[30px] md:text-[55px] lg:text-[67px] text-center lg:text-left not-italic font-semibold leading-[120%] w-[479px] ">Manage Your Property</h1>
                            <p className="pt-6 mx-auto text-text-heading-1 font-poppins text-sm md:text-base lg:text-base text-center lg:text-left not-italic font-normal leading-[150%] w-3/4 md:w-[435px] lg:w-[435px]">Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>
                            <form action="#" className="flex justify-center lg:block">
                                <div className="hero_form_wrap border bg-white-1 border-text-heading-1 mt-6 inline-block mb-24 rounded-full lg:inline-flex">
                                    <input type="email" name="" id="" placeholder="Enter your email" className="bg-transparent border-none border border-purple-700 rounded-full focus:ring-0 focus:outline-none pl-6" />
                                    <button type="submit" className="text-white-1 hover:text-text-heading-1 border border-text-heading-1 bg-text-heading-1 hover:bg-white-1 focus:ring-1 focus:outline-none focus:ring-gray-300 rounded-full px-5 py-3 text-center font-poppins text-base font-normal leading-[100%] lg:text-sm dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all ease-linear duration-300">Get a Quote</button>
                                </div>
                            </form>
                        </div>
                        <div className="hero_img relative w-full lg:flex justify-center items-center hidden">
                            <img src={hero_image} alt="hero_image" className="absolute  right-11 h-full scale-[1.2]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSec;