/* eslint-disable react/jsx-no-undef */
import { useState } from "react";



function Practise(){
    const [age,setAge] = useState(23)
    const handleClick = () => setAge(age + 1)
return(
    <div>
    <h1>How old am i {age}</h1>

    <button onClick={handleClick}>Get older</button>
    </div>
    
   
    
);
};


export default Practise;