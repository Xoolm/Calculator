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
      setState(state + " " + operator + " ");
    }
    console.log(lastElem);
    console.log(arr);
  };

  const setEquals = (e) => {
    setAnswer(eval(state));
    setState((prev) => prev);
  };

  const setDecimal = () => {
    const arr = state.toString().split(" ");
    const lastElem = arr[arr.length - 1];
    if (!lastElem.includes(".")) {
      setState(state + ".");
    }
  };

  const setBrackets = () => {
    const all = state;
    if (!all.includes("(")) {
      setState(state + "(");
    } else if (all.includes("(")) {
      setState(state + ")");
    }
  };

  const setAllClear = () => {
    setState(0);
    setAnswer(0);
  };

  const setClear = (prev) => {
    setState((prev) => prev.slice(0, prev.length - 1));
    if (prev.length <= 0) {
      setState(0);
    }
  };

  return (
    <div className="App">
      <div className="waraper">
        <div className="deck">
          <div id="expression">{state}</div>
          <div id="display">{answer}</div>
          <div className="buttons">
            <button
              style={{ gridArea: "Allclear" }}
              onClick={setAllClear}
              className="button"
              id="Allclear"
            >
              AC
            </button>
            <button
              style={{ gridArea: "clear" }}
              onClick={setClear}
              className="button"
              id="clear"
            >
              C
            </button>
            <button
              style={{ gridArea: "brackets" }}
              onClick={setBrackets}
              className="button"
              id="brackets"
            >
              ()
            </button>
            <button
              style={{ gridArea: "divide" }}
              onClick={() => setOperator("/")}
              className="button"
              id="divide"
            >
              /
            </button>
            <button
              style={{ gridArea: "multiply" }}
              onClick={() => setOperator("*")}
              className="button"
              id="multiply"
            >
              x
            </button>
            <button
              style={{ gridArea: "seven" }}
              onClick={setNumber}
              className="button"
              id="seven"
            >
              7
            </button>
            <button
              style={{ gridArea: "eight" }}
              onClick={setNumber}
              className="button"
              id="eight"
            >
              8
            </button>
            <button
              style={{ gridArea: "nine" }}
              onClick={setNumber}
              className="button"
              id="nine"
            >
              9
            </button>
            <button
              style={{ gridArea: "subtract" }}
              onClick={() => setOperator("-")}
              className="button"
              id="subtract"
            >
              -
            </button>
            <button
              style={{ gridArea: "four" }}
              onClick={setNumber}
              className="button"
              id="four"
            >
              4
            </button>
            <button
              style={{ gridArea: "five" }}
              onClick={setNumber}
              className="button"
              id="five"
            >
              5
            </button>
            <button
              style={{ gridArea: "six" }}
              onClick={setNumber}
              className="button"
              id="six"
            >
              6
            </button>
            <button
              style={{ gridArea: "add" }}
              onClick={() => setOperator("+")}
              className="button"
              id="add"
            >
              +
            </button>
            <button
              style={{ gridArea: "one" }}
              onClick={setNumber}
              className="button"
              id="one"
            >
              1
            </button>
            <button
              style={{ gridArea: "two" }}
              onClick={setNumber}
              className="button"
              id="two"
            >
              2
            </button>
            <button
              style={{ gridArea: "three" }}
              onClick={setNumber}
              className="button"
              id="three"
            >
              3
            </button>

            <button
              style={{ gridArea: "equals" }}
              onClick={setEquals}
              className="button"
              id="equals"
            >
              =
            </button>
            <button
              style={{ gridArea: "zero" }}
              onClick={setNumber}
              className="button"
              id="zero"
            >
              0
            </button>
            <button
              style={{ gridArea: "decimal" }}
              onClick={setDecimal}
              className="button"
              id="decimal"
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
