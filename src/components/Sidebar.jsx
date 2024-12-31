import { NavLink } from "react-router-dom";
import { BiLogoHtml5, BiLogoCss3, BiRightArrowCircle, BiCode, BiLogoJavascript } from "react-icons/bi";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-[#181919] row-span-3 text-white">
      <div>
        <div className="flex items-center justify-center h-[100px] border-b border-[#383737]">
          <div>
            <BiCode size={50} className="text-orange-500" />
            <p className="text-white text-center font-bold">
              Js<span className="text-orange-500">Fi</span>ddle
            </p>
          </div>
        </div>
        <ul>
          {["HTML", "CSS", "JavaScript"].map((item, index) => (
            <li key={index}>
              <NavLink
                to="/"
                className="text-lg flex items-center gap-1 py-2 pl-2 hover-nav"
              >
                {item === "HTML" && <BiLogoHtml5 size={25} />}
                {item === "CSS" && <BiLogoCss3 size={25} />}
                {item === "JavaScript" && <BiLogoJavascript size={25} />}
                <span>Learn {item}</span>
                <BiRightArrowCircle />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Sidebar;
