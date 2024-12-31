import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";

const Header = ({ handleRunClick,handleResetClick }) => {
  return (
    <div className="flex items-center justify-between bg-[#1E1F1F] col-span-2">
      <div className="text-white text-3xl mx-4 font-bold">
        JsFiddle <span className="text-orange-500">Clone</span> App
      </div>
      <div className="flex items-center gap-6">
        <button onClick={handleRunClick} className="bg-orange-500 flex items-center font-semibold text-gray-100 gap-1 px-3 py-2 rounded-md">
          <FaArrowRotateRight className="inline-block" />
          <p>Run</p>
        </button>
        <button onClick={handleResetClick} className="bg-gray-400 flex items-center font-semibold text-gray-100 gap-1 px-3 py-2 rounded-md">
          {/* <FaArrowRotateRight className="inline-block" /> */}
          <p>RESET</p>
        </button>
        <div className="flex items-center gap-4 pr-6">
          <h1 className="text-white font-serif">Share on:</h1>
          <FaFacebook size={20} className="text-gray-400"/>
          <FaInstagram size={20} className="text-gray-400"/>
          <FaTwitter size={20}  className="text-gray-400"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
