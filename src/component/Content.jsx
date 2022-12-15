import React, { useState } from "react";
import data from "../data";

function Content() {
    const [valueInput,setInputValue] = useState("")
    const [loremText,setLoremText] = useState([])
    const handleLorem = (e)=>{
      e.preventDefault()
      const parse = +valueInput;
      if(parse >= 1 && parse <= 20 ){
        setLoremText(data.slice(0,parse))
      }else if(parse <= 0 ){
        alert("عدد باید بزرگتر از 0 باشد")
      }else if(parse > 20){
        alert("عدد وارد شده بیش از حد مجاز است")
      }
    }

  return (
    <>
    <form onSubmit={handleLorem}>
      <input type="number" value={valueInput} onChange={(e)=>setInputValue(e.target.value)}/>
      <button>بساز</button>
    </form>
    {loremText.map((item,index)=>{
       return <p className="lorem" key={index}>{item}</p>
    })}
    </>
  );
}

export default Content;
