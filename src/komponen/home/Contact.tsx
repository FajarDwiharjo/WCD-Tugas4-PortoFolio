import {Link} from "react-router-dom";
import profileimage from "../../assets/images/profile.png";

export default function Contact() {
    return (
        <section className="flex flex-col py-20 justify-between bg-black text-white">
            <div className="flex flex-row justify-between items-center mx-[100px]">
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-4xl font-bold">you have something in mind ?</h1>
                <div className="item-center gap-4 flex flex-row">
                <span>
                    <img src={profileimage} alt="My Photo" className="w-16 h-16 rounded-full" />
                </span>
                <h1 className="text-4x1">let's build it together</h1>
                </div>
            </div>
            <Link to="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                Come on!
            </button>
            </Link>
            </div>
        </section>
    )
}
