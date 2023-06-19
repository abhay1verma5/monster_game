import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

  
function App() {

 
   const[specialattackenable,setspecialattackenable]=useState(0);
  const [monstscore,setmonstscore]=useState(100);
  const [playerscore,setplayerscore]=useState(100);
 
  
const Attack = async event => {
  setmonstscore(monstscore-Math.floor(Math.random()*9))
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
const heal=()=>{
   
 
  setplayerscore(100);
  

 
}
  return (
    <div className="App main" >

      <h1>Monster Game</h1>
      <h2>Monster  Score </h2> 
    <div className='monstscore'> {monstscore}</div>  
      <h2>Player Score  </h2> 
      <div className='monstscore'> {playerscore}</div>

      <br></br>
       

      
      <div className='wrapper'  >
      <button   className='abha'
          
      onClick={Attack}> Attack</button>
      
      <button   className='abha' onClick={specialattack}> Special  attack </button>
       <br/>
      <button  className='abha' onClick={heal}> Heal  </button> 
      <button  className='abha' onClick={Restart} > Restart  </button> </div>
    </div>
  );
}

export default App;
