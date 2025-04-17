import { Link } from "react-router-dom";

import ContactProfile from "../../../assets/images/contactProfile.png"

function Bio() {
  return (
    <section className="flex flex-col w-1/2 ml-20 my-4" id="bio">
      <div className="w-[200px]">
        <img src={ContactProfile} alt="myself" className="w-full" />
      </div>
      <div className="mt-10">
        <p className="text-sm">Contact Details</p>
        <div className="text-lg">
          <Link to={"mailto:contact@navrosjo.com"}>
            contact@navrosjo.com
          </Link>
          <br />
          <Link to={"tel:+62859106962144"}>+62-859-1069-62144</Link>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm">Social</p>
        <ul className="text-lg flex flex-col gap-2">
          <li>
            <Link to={"https://www.linkedin.com/in/fajar-dwiharjo-631736355/"}>Linkedin</Link>
          </li>
          <li>
            <Link to={"https://github.com/FajarDwiharjo"}>Github</Link>
          </li>
          <li>
            <Link to={"https://discord.com/users/612305582132690964"}>Discord</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Bio;
