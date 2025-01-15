import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function aboutus() {
    return (
        <>
            <section>
                <h1 className="text-5xl text-center py-16 text-red-600 font-bold">About Us</h1>
                <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 lg:items-center lg:px-28 bg-gray-200">
                    <img
                        src="aboutus.jpg"
                        className="mx-auto mb-10 lg:mb-0 lg:ml-16 py-20 w-full sm:w-3/4 md:w-4/5 lg:h-[700px]"
                        alt="AboutUs"
                    />
                    <div className="text-left lg:mr-16">
                        <h2 className="font-bold text-4xl sm:text-3xl font-sans text-red-600 mb-6 text-center lg:text-left">
                            Certainly, here's a detailed overview of HelpKey India Private Limited:
                        </h2>
                        <p className="text-slate-800 text-xl sm:text-2xl text-justify font-bold mb-1">
                            Introduction:                    </p>
                        <p className="text-slate-500 text-justify text-base sm:text-md leading-6 mb-8">
                            HelpKey India Private Limited is a service-based company that was established in November 2021. It operates with a primary focus on providing affordable manpower services and facilitating cost savings for its customers through the use of Helpkey cards. The company’s headquarters are situated in Rajendra Nagar, Naubasta, Kanpur, Uttar Pradesh, India.
                        </p>
                        <p className="text-slate-800 text-md sm:text-2xl text-justify font-bold mb-1">
                            Objectives:                    </p>
                        <p className="text-justify text-slate-500 text-base sm:text-md leading-6">
                            The core objectives of Help Key India Private Limited encompass two main aspects. Firstly, it aims to offer essential services to individuals at reduced costs, thereby enhancing accessibility and affordability. Secondly, the company seeks to foster business partnerships through the provision of discounts via Helpkey cards, thereby benefiting both consumers and establishments
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-56 text-justify">
                    <h2 className="py-4 text-md font-bold ">*Help Key Services:*</h2>
                    <ul className="list-decimal leading-6 font-medium pl-4 text-gray-500">
                        <li className="py-4"><span className="font-bold">Helpkey Point:</span> This service is designed to cater to commercial needs. It allows individuals to avail themselves of various services by visiting Helpkey points. This includes discounts on bills in establishments such as hospitals, hotels, and restaurants, contributing to significant cost savings.</li>
                        <li className="py-4"><span className="font-bold">Helpkey Service:</span>
                            Help Key India Private Limited extends its services to the convenience of customers’ homes. Through Helpkey Service, the company provides doorstep services, ensuring that individuals can access the required services from the comfort of their residences.</li>
                        <li className="py-4"><span className="font-bold">Expertise::</span>
                            Help Key India Private Limited specializes in facilitating discounts on bills incurred at hospitals, hotels, and restaurants. The company’s proficiency lies in securing substantial savings for its customers in these sectors. Additionally, the company prides itself on delivering quality manpower services at economical rates.</li>
                        <li className="py-4"><span className="font-bold">Supply Chain::</span>
                            The company’s Helpkey cards serve as a tool for enabling discounts on bills at Helpkey points. Moreover, Help Key India Private Limited’s manpower services contribute to efficient task management and cost-effective solutions for various professional needs.</li>
                        <li className="py-4"><span className="font-bold">Ethics and Values::</span>
                            Help Key India Private Limited places a high value on customer satisfaction and financial prudence. It offers a 100% refund facility for services that are returned, showcasing its commitment to ensuring customer contentment. The company also provides round-the-clock contact support, reinforcing its dedication to aiding customers promptly.</li>
                        <li className="py-4"><span className="font-bold">Historical Background::</span>
                            Operating since 2021, Help Key India Private Limited has been consistently contributing to financial savings for its customers. By offering discounts and valuable services, the company has established itself as a reliable partner in enhancing economic prudence.</li>
                        <li className="py-4"><span className="font-bold">Future Endeavors::</span>
                            Looking ahead, Help Key India Private Limited envisions expanding its assistance to customers by providing increased financial support. The company’s future plans also involve guiding individuals towards optimizing their financial resources through its comprehensive services.</li>
                        <p className="py-4">In conclusion, Help Key India Private Limited is a forward-thinking company that emphasizes affordability, convenience, and value in its services. Through its innovative approach and commitment to customer welfare, the company has emerged as a significant player in enhancing financial well-being and accessibility for individuals and businesses alike. </p>
                    </ul>
                    <Contact />
                </div>
            </section>
            <Footer/>
        </>
    );
}
