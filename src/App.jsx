import { useState } from 'react'

import './App.css'

function App() {
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState("");
  const clickHandler = (val) => {
    setExpression(pre => pre + val)
  }

  const calculateHandler = () => {
    if (expression.trim() == "") {
      setResult("Error")
    }
    try {
      const output = eval(expression);
      setResult(output);
    } catch {
      setResult("Error")
    }
  }

  const clearHandler = () => {
    setExpression("")
    setResult("")
  }
  return (
    <>
      <h1>React Calculator</h1>
      <div className="card">
        <input value={expression} readOnly />
      </div>
      <div>{result}</div>

      <div className='btn-container'>
        <button className="btn" type="button" onClick={() => clickHandler("7")}>7</button>
        <button className="btn" type="button" onClick={() => clickHandler("8")}>8</button>
        <button className="btn" type="button" onClick={() => clickHandler("9")}>9</button>
        <button className="btn" type="button" onClick={() => clickHandler("+")}>+</button>
      </div>
      <div className='btn-container'>
        <button className="btn" type="button" onClick={() => clickHandler("4")}>4</button>
        <button className="btn" type="button" onClick={() => clickHandler("5")}>5</button>
        <button className="btn" type="button" onClick={() => clickHandler("6")}>6</button>
        <button className="btn" type="button" onClick={() => clickHandler("-")}>-</button>
      </div>
      <div className='btn-container'>
        <button className="btn" type="button" onClick={() => clickHandler("1")}>1</button>
        <button className="btn" type="button" onClick={() => clickHandler("2")}>2</button>
        <button className="btn" type="button" onClick={() => clickHandler("3")}>3</button>
        <button className="btn" type="button" onClick={() => clickHandler("*")}>*</button>
      </div>
      <div className='btn-container'>
        <button className="btn" type="button" onClick={clearHandler}>C</button>
        <button className="btn" type="button" onClick={() => clickHandler("0")}>0</button>
        <button className="btn" type="button" onClick={calculateHandler}>=</button>
        <button className="btn" type="button" onClick={() => clickHandler("/")}>/</button>
      </div>
    </>
  )
}

export default App
