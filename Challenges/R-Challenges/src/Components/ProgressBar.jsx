import React, { useState } from 'react'

export default function ProgressBar() {
    const [val,setVal]=useState(10);
    const setValuer = (e) => setVal(Number(e.target.value));
return (
    <>
    <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
        <form>
        <label for="html">Input Percentage:</label>
        <input type="number" onChange={setValuer} />
        </form>
    </div>
    
    
    </>
  )
}
