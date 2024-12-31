import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Output from "../components/Output";

const Home = () => {
  const [htmlData,setHtmlData]=useState("");
  const [cssData,setCssData]=useState("");
  const [jsData,setJsData]=useState("");
  const [combinedCode,setCombinedCode]=useState("");
  
  const [activeField, setActiveField] = useState(""); // Track active field

  const containerRefs = {
    html: useRef(null),
    css: useRef(null),
    javascript: useRef(null),
    output: useRef(null),
  };
 
 

  const handleFocus = (field) => {
    setActiveField(field); // Set active field
  };

  const handleClickOutside = (event) => {
    Object.values(containerRefs).forEach((ref) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveField(""); // Reset active field
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
const handleRunClick=()=>{
  const combinedCode = `
  <html>
    <head>
      <style>${cssData}</style>
    </head>
    <body>
      ${htmlData}
      <script>${jsData}</script>
    </body>
  </html>
`;
setCombinedCode(combinedCode);
}

const handleResetClick=()=>{
  setHtmlData("");
  setCssData("");
  setJsData("");
  setCombinedCode("");
}
  

  return (
    <div className="h-screen w-screen grid grid-rows-[100px_1fr_1fr] grid-cols-[250px_1fr_1fr]">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <Header handleRunClick={handleRunClick} handleResetClick={handleResetClick}/>

      {/* Main Content */}
      <Editor
        ref={containerRefs.html}
        id="html"
        setValueAll={setHtmlData}
        value={htmlData}
        label="HTML"
        isActive={activeField === "html"}
        onFocus={() => handleFocus("html")}
      />
      <Editor
        ref={containerRefs.css}
        id="css"
        setValueAll={setCssData}
        value={cssData}
        label="CSS"
        isActive={activeField === "css"}
        onFocus={() => handleFocus("css")}
      />
      <Editor
        setValueAll={setJsData}
        value={jsData}
        ref={containerRefs.javascript}
        id="javascript"
        label="JavaScript"
        isActive={activeField === "javascript"}
        onFocus={() => handleFocus("javascript")}
      />
    {/* output */}
      <Output  combinedCode={combinedCode}/>
    </div>
  );
};

export default Home;
