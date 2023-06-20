import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



import ProgressBar from "@ramonak/react-progress-bar";

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function App() {

  const [disable,setdisable]=useState('no_button');
 const[color1,setcolor1]=useState("red")
   const[specialattackenable,setspecialattackenable]=useState(0);
  const [monstscore,setmonstscore]=useState(100);
  const [playerscore,setplayerscore]=useState(100);
 
  
const Attack = async event => {
  setmonstscore(monstscore-Math.floor(Math.random()*9))
  if(specialattackenable>5)
  {
    setdisable('abha')
   
        
  }
  setspecialattackenable(specialattackenable+1);

  

  setplayerscore(playerscore-Math.floor(Math.random()*6))
};
   
 
const Restart=()=>{
   alert("game restart");
  setmonstscore(100)
  setplayerscore(100)
}

const specialattack=()=>{

   if(specialattackenable>=5)
   {
  setmonstscore(monstscore-5)
  if(playerscore+10>=100)
  setplayerscore(100)
  else
  setplayerscore(playerscore+10)}
  


}
const heal=async event=>{
  setplayerscore(100);
  setcolor1('green');
  await delay(1000);
 
  
setcolor1('red');
 
}
  return (
    <div className="App main" >

      <h1>Monster Game</h1>
      <h2>Monster  Score </h2> 
      <ProgressBar className='monstscore2' completed={monstscore} bgColor="red" animateOnRender={true} /> 
      <h2>Player Score  </h2> 
      

      <ProgressBar className='monstscore2' completed={playerscore} bgColor={color1} animateOnRender={true} />
      <br></br>
       

      
      <div className='wrapper'  >
      <button   className='abha'
          
      onClick={Attack}> Attack</button>
      
      <button   className={disable} onClick={specialattack}> Special Attack </button>
       <br/>
      <button  className='abha' onClick={heal}> Heal  </button> 
      <button  className='abha' onClick={Restart} > Restart  </button> </div>
    </div>
  );
}

export default App;
