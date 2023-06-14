import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [answer, setAnswer] = useState(0);

  const setNumber = (e) => {
    const number = e.target.textContent;
    if (state === 0) {
      setState(number);
    } else {
      setState((prevState) => prevState + number);
    }
  };

  const setOperator = (symbol) => {
    const arr = state.toString().slice(-1);
    const lastElem = arr[arr.length - 1];
    const operator = symbol;
    setState((prev) => prev + operator);
    if (
      lastElem === "+" ||
      lastElem === "-" ||
      lastElem === "*" ||
      lastElem === "/"
    ) {
      // Если последний элемент является логическим оператором, заменяем его на новый оператор
      const updatedState = state.slice(0, -1) + operator;
      setState(updatedState);
    } else {
      setState(state + operator);
    }
    console.log(lastElem);
  };

  const setEquals = (e) => {
    setAnswer(eval(state));
    setState((prev) => prev);
  };

  const setDecimal = () => {
    const arr = state.toString().split(" ");
    const lastElem = arr[arr.length - 1];
    if (!lastElem.includes(".") && isNaN(parseInt(lastElem)) === false) {
      setState(state + ".");
    }
  };

  const setClear = () => {
    setState(0);
    setAnswer(0);
  };

  return (
    <div className="App">
      <div className="waraper">
        <div className="deck">
          <div id="expression">{state}</div>
          <div id="display">{answer}</div>
          <div className="buttons">
            <button onClick={setClear} className="button" id="clear">
              AC
            </button>
            <button
              onClick={() => setOperator(" /")}
              className="button"
              id="divide"
            >
              /
            </button>
            <button
              onClick={() => setOperator(" *")}
              className="button"
              id="multiply"
            >
              x
            </button>
            <button onClick={setNumber} className="button" id="seven">
              7
            </button>
            <button onClick={setNumber} className="button" id="eight">
              8
            </button>
            <button onClick={setNumber} className="button" id="nine">
              9
            </button>
            <button
              onClick={() => setOperator(" -")}
              className="button"
              id="subtract"
            >
              -
            </button>
            <button onClick={setNumber} className="button" id="four">
              4
            </button>
            <button onClick={setNumber} className="button" id="five">
              5
            </button>
            <button onClick={setNumber} className="button" id="six">
              6
            </button>
            <button
              onClick={() => setOperator(" +")}
              className="button"
              id="add"
            >
              +
            </button>
            <button onClick={setNumber} className="button" id="one">
              1
            </button>
            <button onClick={setNumber} className="button" id="two">
              2
            </button>
            <button onClick={setNumber} className="button" id="three">
              3
            </button>

            <button onClick={setEquals} className="button" id="equals">
              =
            </button>
            <button onClick={setNumber} className="button" id="zero">
              0
            </button>
            <button onClick={setDecimal} className="button" id="decimal">
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
