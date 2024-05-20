import { useState, useRef, useEffect } from "react";
import "./App.css";
import { calculateArea, text } from "./helpers";

function App() {
  const [unit, setUnit] = useState("sarsai");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [results, setResults] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [language, setLanguage] = useState("ur");

  const addedCrDiv = useRef(false);

  useEffect(() => {
    if (addedCrDiv.current) {
      return;
    }

    let checkDiv = document.querySelectorAll(".creditDiv");

    if (checkDiv.length > 0) {
      return;
    }

    const handleCreditRedirect = () => {
      window.location.href = "https://github.com/fhackker";
    };

    const body = document.getElementsByTagName("body");
    const creditDiv = document.createElement("div");
    creditDiv.addEventListener("click", handleCreditRedirect);
    creditDiv.classList.add("creditDiv");
    creditDiv.style.cursor = "pointer";

    const icon = document.createElement("i");
    icon.classList.add("bx", "bxl-github");
    icon.style.color = "#000";
    creditDiv.appendChild(icon);

    body[0].appendChild(creditDiv);
    addedCrDiv.current = true;
  }, []);

  const handleCalculate = () => {
    const results = calculateArea(unit, length, width);
    setResults(results);
    setShowResults(true);
  };

  return (
    <div className="calculator-container" style={{ textAlign: "right" }}>
      <h2>{text[language].title}</h2>
      <div className="input-container">
        <label>{text[language].unitLabel}</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="sarsai">
            {language === "en" ? "Sarsai/Karam" : "کرم"}
          </option>
          <option value="feet">{language === "en" ? "Feet" : "فٹ"}</option>
        </select>
      </div>
      <div className="input-container">
        <label>{text[language].lengthLabel}</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label>{text[language].widthLabel}</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>
      <div className="button-container">
        <button onClick={handleCalculate}>
          {text[language].calculateButton}
        </button>
      </div>
      {showResults && (
        <div className="result-container">
          {results.totalSquareFeet > 0 && (
            <div className="result-input">
              <label>{text[language].totalSquareFeet}</label>
              <input type="text" readOnly value={results.totalSquareFeet} />
            </div>
          )}

          {results.acres > 0 && (
            <div className="result-input">
              <label>{text[language].results.acres}</label>
              <input type="text" readOnly value={results.acres} />
            </div>
          )}

          {results.kanals > 0 && (
            <div className="result-input">
              <label>{text[language].results.kanals}</label>
              <input type="text" readOnly value={results.kanals} />
            </div>
          )}

          {results.marlas > 0 && (
            <div className="result-input">
              <label>{text[language].results.marlas}</label>
              <input type="text" readOnly value={results.marlas} />
            </div>
          )}

          {results.sarsai > 0 && (
            <div className="result-input">
              <label>{text[language].results.sarsai}</label>
              <input type="text" readOnly value={results.sarsai} />
            </div>
          )}

          {results.feet > 0 && (
            <div className="result-input">
              <label>{text[language].results.feet}</label>
              <input type="text" readOnly value={results.feet} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
