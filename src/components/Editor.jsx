import React, { forwardRef } from "react";

const Editor = forwardRef(({ id, label, isActive, onFocus,value,setValueAll }, ref) => {
  return (
    <div className="bg-[#1E1F1F] border-y-[1px] border-x-[1px] border-[#383737]">
      <div ref={ref}>
        <label
          htmlFor={id}
          className={`heading ${isActive ? "text-orange-500" : "text-white"}`}
        >
          {label}
        </label>
        <textarea
        placeholder={id==="html"?"Enter your HTML code here":id==="css"?"Enter your CSS code here":"Enter your JavaScript code here"}
          value={value}
          onChange={(e)=>setValueAll(e.target.value)}
          id={id}
          onFocus={onFocus}
          className="bg-[#1E1F1F] w-full text-white outline-none  resize-none h-72 overflow-hidden"
        />
      </div>
    </div>
  );
});

export default Editor;
