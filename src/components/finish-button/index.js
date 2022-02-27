import ProgressBar from "../progress-bar";
import React, {useState} from 'react'


  
function FinishButton() {
    const [progress, setProgress] = useState(50)

    const handleClick = ()=>{
        setProgress(100)
    }

  return (
     <>
    <div className="App">
        <h3 className="heading">Progress Bar</h3>
        <ProgressBar bgcolor="#b6e079" progress={progress}  height={30} />
        <ProgressBar bgcolor="#f87b6a" progress={progress}   height={30} />
        <ProgressBar bgcolor="white" progress={progress}  height={30} />
        <ProgressBar bgcolor="#76b9e2" progress={progress}   height={30} />
        <ProgressBar bgcolor="#d9b665" progress={progress}   height={30} />
    </div>
        <button onClick={handleClick}>
            Finish
        </button>
    </>
     
  );
}
  
export default FinishButton