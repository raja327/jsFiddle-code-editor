import React, { useEffect, useRef } from 'react'

const Output = ({combinedCode}) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      iframeDocument.open();
      iframeDocument.write(combinedCode);
      iframeDocument.close();
    }
  }, [combinedCode]);
  return (
    <div className=''>
      <label htmlFor="output" className='font-bold p-2 text-xl'>Output</label>
      <iframe ref={iframeRef}  src="" frameborder="0" className='w-full h-72'>
        
      </iframe>
    </div>
  )
};

export default Output
