import { useState } from "react";
import Counter from "./components/counter";

function App() {
  let [count,setCount] = useState(10);
  function CounterAdd(){
    setCount(count + 1);
  }

  function CountSub(){
    //code
    setCount(count - 1);
    if (count <= 0){
      return ("you cannot go below Zero")
    }
  }
  return (
    <>
    <Counter count={count} CounterAdd={CounterAdd} CountSub={CountSub} />
    </>
  )

}

export default App
