import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <section className="flex flex-col py-5 px-20 justify-between bg-black text-white">
            <div className="bg-black text-off-white flex justify-between">
                <p>Build with me Fajar Dwiharjo A.K.A. NAvrosjo </p>
                <ul className="flex justify-end gap-10">
                    <li>
                    <Link to="https://www.linkedin.com/in/fajar-dwiharjo-631736355/">
                        <p>Linkedin</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="https://github.com/FajarDwiharjo">
                        <p>Github</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="https://discord.com/users/612305582132690964">
                        <p>Discord</p>
                    </Link>
                    </li>
                </ul>
            </div>
        </section>
      );
    }
