import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);
  const cntPlus = () =>{
    setCount(
      count + 1
    )
  }

  const cntMin = () => {
    if (count > 0) {
      setCount(
        count - 1
        )
      }
      alert("You Are Not Decrement");
    }
  
    const cntReset = () =>{
      setCount(
        0
      )
    }
  return (
    <>
      <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h1>You can Increment, Decrement and Reset.</h1>
            <div className="my-5">
              <h2 className="my-5">{count}</h2>
              <button className="btn btn-success mx-3" onClick={() => cntPlus()}>Increment</button>
              <button className="btn btn-secondary mx-3" onClick={() => cntReset()}>Reset</button>
              <button className="btn btn-danger mx-3" onClick={() => cntMin()}>Decrement</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
