import { useState } from 'react'


export default function Likes() {
   
    console.log("the botton is clicked");
     let[isLike,setIsLike] = useState(false);
     let[clicks, setClicks] = useState(0);
     console.log(clicks);
     
   
    let toggle=()=>{
        setIsLike(!isLike);
        setClicks(clicks+1);
    };

    let styles={color:"red"}

    return(
        <div>
            
            <h3>state in React</h3>
            <p>Clicks={clicks}</p>
            <p onClick={toggle} >
            { 
                isLike ? (<i className="fa-solid fa-heart" style={styles}></i>):
                (<i className="fa-regular fa-heart"></i>)
            }
            </p>
            
            
        </div>
    )
}

