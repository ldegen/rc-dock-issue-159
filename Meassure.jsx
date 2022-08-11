import React, {DOMElement, useEffect, useRef, useState} from 'react';
export default ({label})=>{
  const ref = useRef(null);
  const [dims, setDims] = useState("unknown");
  useEffect(()=>{
    if(!ref.current) {
      throw new Error("now I am mad.");
    }
    new ResizeObserver(()=>{
      if(!ref.current){
        return;
      }
      const {width, height} = ref.current.getBoundingClientRect();
      setDims(`${width} x ${height}`);
    }).observe(ref.current);
  },[]);
  return (
    <div ref={ref} style={{
      height:"100%",
      width:"100%",
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      margin:0,
      padding:0,
      background:"yellow",
      border:"2px dotted red",
      boxSizing:"border-box"
      }}>
      {label}<br/>
      Size: {dims}
    </div>
  );
};
