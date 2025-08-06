import { useState } from "react";
import { evaluate } from "mathjs";

const CalculatorCard = () => {
  const [display, setDisplay] = useState("");
  const [ans, setAns] = useState("");

  const handleCalculation = (value: string) => {
    if (value === "AC") {
      setDisplay("");
      setAns("");
    } else if (value === "=") {
      try {
        const expression = display.replace(/x/g, "*").replace(/÷/g, "/");
        const result = evaluate(expression);
        setAns(result.toString());
      } catch (error) {
        setAns("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const buttons = [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      <div className="mt-10 bg-gray-800 p-4 rounded-xl shadow-xl text-right">
        <div className="text-xl font-mono">Ans = {ans || 0}</div>
        <div className="text-2xl font-mono tracking-widest text-lime-300">
          {display || 0}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5.5">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleCalculation(btn)}
            className={`py-4 rounded text-xl font-medium bg-gray-700 hover:bg-gray-600 transition ${
              btn === "AC" ? "bg-red-600 hover:bg-red-500" : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorCard;
