import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

    const [no , setNo] = useState (0)
    const [result , setResult] = useState (0)

    const btnPlus = () => {
      setNo( no + 1 )
    }
    useEffect (() => {
      console.log(no);
    },[no])
  return (
    <>
    <h1>No :- {no}</h1>
    <button onClick={()=> btnPlus()}>Click</button>
    </>
  );
}

export default App;
