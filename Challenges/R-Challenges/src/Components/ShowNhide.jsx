import React, { useState } from "react";

export default function ShowNhide() {
  const [show, setShow] = useState(true);
  return (
    <div className="container ">
      <button className="border-2 bg-amber-400 text-6xl " onClick={()=>setShow((show)=>!show)}>Show/Hide</button>
      {show ? <h1 className="text-4xl text-red-500 -">Ana nhab n'smoki</h1> : null}
    </div>
  );
}
