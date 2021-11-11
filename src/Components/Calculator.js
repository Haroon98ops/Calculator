import React, { useState } from "react";
import "./Index.css";

const Calculator = () => {
  const [var1, setvar1] = useState("");
  const [var2, setvar2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (num) => {
    if (operator !== "") {
      setvar2((preValue) => `${preValue && preValue}${num}`);
    } else {
      setvar1((preValue) => `${preValue && preValue}${num}`);
    }
  };
  const handleOperator = (op) => {
    setOperator(op);
  };

  const handleAllClear = () => {
    setResult("");
    setvar1("");
    setvar2("");
    setOperator("");
  };
  const handleClearDigit = () => {
    if (var2) {
      setvar2(var2.slice(0, -1));
    } else if (operator) {
      setOperator("");
    } else if (var1) {
      setvar1(var1.slice(0, -1));
    }
  };

  const handleDecimal = () => {
    if (!var1.includes(".") && operator === "") {
      setvar1((preValue) => (preValue !== "" ? `${preValue}.` : ""));
    } else if (!var2.includes(".") && operator !== "") {
      setvar2((preValue) => (preValue !== "" ? `${preValue}.` : ""));
    }
  };

  const handleAnswer = () => {
    const num1 = Number(var1);
    const num2 = Number(var2);
    let ans = 0;
    switch (operator) {
      case "+":
        ans = num1 + num2;
        break;
      case "-":
        ans = num1 - num2;
        break;
      case "/":
        ans = num1 / num2;
        break;
      case "X":
        ans = num1 * num2;
        break;
      case "%":
        ans = num1 % num2;
        break;
      default:
        console.log("No Operator found");
        break;
    }
    setResult(ans);
    setvar1(String(ans));
    setOperator("");
    setvar2("");
  };
  return (
    <div className="main">  
      <div className="second">
        <div className="third">
          <div className="fourth">
            <div className="fourth-contanier">{result}</div>
            <div className="fourth-contanier">
              {var1 && <span>{var1}</span>}{" "}
              {operator && <span>{operator}</span>}{" "}
              {var2 && <span>{var2}</span>}
            </div>
          </div>
          <div className="grid-container">
            <div>
              <button className="fifth" onClick={handleAllClear}>
                AC
              </button>
            </div>
            <div>
              <button className="sixth" onClick={handleClearDigit}>
                CE
              </button>
            </div>
            <div>
              <button className="seventh" onClick={() => handleOperator("%")}>
                %
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleOperator("/")}>
                /
              </button>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <button className="eighth" onClick={() => handleNumber(7)}>
                7
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleNumber(8)}>
                8
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleNumber(9)}>
                9
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleOperator("X")}>
                X
              </button>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <button className="eighth" onClick={() => handleNumber(4)}>
                4
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleNumber(5)}>
                5
              </button>
            </div>
            <div>
              <button className="seventh" onClick={() => handleNumber(6)}>
                6
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleOperator("-")}>
                -
              </button>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <button className="eighth" onClick={() => handleNumber(1)}>
                1
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleNumber(2)}>
                2
              </button>
            </div>
            <div>
              <button className="seventh" onClick={() => handleNumber(3)}>
                3
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleOperator("+")}>
                +
              </button>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <button className="eighth" onClick={handleDecimal}>
                .
              </button>
            </div>
            <div>
              <button className="eighth" onClick={() => handleNumber(0)}>
                0
              </button>
            </div>
            <div>
              <button className="seventh" onClick={() => handleOperator("+-")}>
                +-
              </button>
            </div>
            <div>
              <button className="eighth" onClick={handleAnswer}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
