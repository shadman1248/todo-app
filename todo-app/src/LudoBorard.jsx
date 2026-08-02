import { useState } from 'react'
export default function LudoButton () {

    let [move,setMove]=useState({red:0,blue:0,green:0,yellow:0});

   function updateRed(){
    setMove((prevmove)=>{
        return {...prevmove,red:prevmove.red+1};
    });

   }
    
    function updateBlue(){
    setMove({...move,blue:move.blue+1});

   }

    function updateGreen(){
    setMove({...move,green:move.green+1});

   }

    function updateYellow(){
    setMove({...move,yellow:move.yellow+1});

   }
    
return (
    <div>
        <p>GAME BEGINS!</p>
        <div>
        <p>red move={move.red}</p>
        <button style={{backgroundColor:"red"}}onClick={updateRed}>+1</button>
        <p>blue move={move.blue}</p>
        <button style={{backgroundColor:"blue"}}onClick={updateBlue}>+1</button>
        <p>green move={move.green}</p>
        <button style={{backgroundColor:"green"}}onClick={updateGreen}>+1</button>
        <p>yellow move={move.yellow}</p>
        <button style={{backgroundColor:"yellow"}}onClick={updateYellow}>+1</button>
        </div>
    </div>
);
}