import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
    
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
    
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value =null;
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
    
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <label style={{fontSize:"20px", fontWeight:"bold", color:"tomato", marginRight:"10px"}}>Current Result is:</label>
        <span  style={{fontSize:"20px", fontWeight:"bold"}} ref={resultRef}> 
          {result} 
        </span> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
          style={{marginTop:"20px"}}
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
       
      </form> 
    </div> 
  ); 
} 
 
export default App; 
