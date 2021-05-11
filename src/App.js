import { useEffect, useState } from "react";

function App() {

const [initialTime, setInitialTime] = useState(0);
const [timerOn, setTimerOn] = useState(false);


///////////////////////////////////////////////////
useEffect(()=> {

  let interval = null;

  if(timerOn){
    interval = setInterval(()=> {
      setInitialTime(prevTime => prevTime + 10)
      }, 10)
  }else{
    clearInterval(interval);
  }

  return () => clearInterval(interval);
},[timerOn]);



///////////////////////////////////////////////////////////

// const getTimeString = () => {
//   if(initialTime > 9)
//     return initialTime;
//   else
//     return ("0"+initialTime)
// }

  return (
    <div className="section">
      
        <h1> Timer </h1>
        <div className="timer">
          <span> {("0" + Math.floor((initialTime/(1000*60*60)) % 24)).slice(-2)} :</span>
          <span> {("0" + Math.floor((initialTime/(1000*60)) % 60)).slice(-2)} :</span>
          <span> {("0" + Math.floor((initialTime/1000) % 60)).slice(-2)} :</span>
          <span> {("0" + ((initialTime/10) % 100)).slice(-2)} </span>
        </div>

        <div>
          <button onClick={()=> setTimerOn(true)} className="buttons"> Start </button>
          <button onClick={()=> setTimerOn(false)} className="buttons"> Stop </button>
          <button onClick={()=> setTimerOn(true)} className="buttons"> Resume </button>
          <button onClick={()=> setInitialTime(0)} className="buttons"> Reset </button>
        </div>
    </div>
  );
}

export default App;
