import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const unitConversions = {
    sarsai: 5.5, // 1 sarsai = 5.5 feet
    marla: 272.25, // 1 marla = 272.25 sq. ft.
    kanal: 5445, // 1 kanal = 5445 sq. ft.
    acre: 43560, // 1 acre = 43560 sq. ft.
};

function App() {
    const [unit, setUnit] = useState('sarsai');
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [results, setResults] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleCalculate = () => {
        let areaInSquareFeet;

        if (unit === 'sarsai') {
            const lengthInFeet = length * unitConversions.sarsai;
            const widthInFeet = width * unitConversions.sarsai;
            areaInSquareFeet = lengthInFeet * widthInFeet;
        } else if (unit === 'feet') {
            areaInSquareFeet = length * width;
        }

        // Breakdown into acres, kanals, marlas, sarsai, and feet
        let acres = Math.floor(areaInSquareFeet / unitConversions.acre);
        let remainingFeet = areaInSquareFeet % unitConversions.acre;

        let kanals = Math.floor(remainingFeet / unitConversions.kanal);
        remainingFeet %= unitConversions.kanal;

        let marlas = Math.floor(remainingFeet / unitConversions.marla);
        remainingFeet %= unitConversions.marla;

        let sarsai = Math.floor(remainingFeet / unitConversions.sarsai);
        remainingFeet %= unitConversions.sarsai;

        // Convert sarsai to marlas if >= 3
        if (sarsai >= 3) {
            const extraMarlas = Math.floor(sarsai / 3); // How many extra marlas
            marlas += extraMarlas; // Add them to marlas
            sarsai %= 3; // Leftover sarsai
        }

        // Convert marlas to kanals if >= 20
        if (marlas >= 20) {
            const extraKanals = Math.floor(marlas / 20); // Extra kanals
            kanals += extraKanals; // Add to kanals
            marlas %= 20; // Leftover marlas
        }

        // Convert kanals to acres if >= 8
        if (kanals >= 8) {
            const extraAcres = Math.floor(kanals / 8); // Extra acres
            acres += extraAcres; // Add to acres
            kanals %= 8; // Leftover kanals
        }

        const result = {
            acres,
            kanals,
            marlas,
            sarsai,
            feet: remainingFeet,
        };

        setResults(result);
        setShowResults(true);
    };

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

        const body = document.getElementsByTagName('body');
        const creditDiv = document.createElement("div");
        creditDiv.addEventListener("click", handleCreditRedirect);
        creditDiv.classList.add("creditDiv");
        creditDiv.style.cursor = "pointer"

        const icon = document.createElement('i');
        icon.classList.add("bx", "bxl-github");
        icon.style.color = "#000"
        creditDiv.appendChild(icon);

        body[0].appendChild(creditDiv);
        addedCrDiv.current = true;
    }, []);

    return (
        <div className="calculator-container" style={{ textAlign: 'right' }}>
            <h2>زمین کیلکولیٹر</h2> {/* "Land Calculator" */}

            <div className="input-container">
                <label>پیمائش کی اکائی:</label> {/* "Unit of Measure" */}
                <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                >
                    <option value="sarsai">سڑسائی/کرام</option> {/* "Sarsai/Karam" */}
                    <option value="feet">فٹ</option> {/* "Feet" */}
                </select>
            </div>

            <div className="input-container">
                <label>لمبائی:</label> {/* "Length" */}
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label>چوڑائی:</label> {/* "Width" */}
                <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
            </div>

            <div className="button-container">
                <button onClick={handleCalculate}>نتیجہ نکالیں</button> {/* "Calculate" */}
            </div>

            {showResults && (
                <div className="result-container">
                    {results.acres > 0 && (
                        <div className="result-input">
                            <label>ایکڑ میں رقبہ</label> {/* "Area in Acres" */}
                            <input type="text" readOnly value={results.acres} />
                        </div>
                    )}

                    {results.kanals > 0 && (
                        <div className="result-input">
                            <label>کنال میں رقبہ</label> {/* "Area in Kanals" */}
                            <input type="text" readOnly value={results.kanals} />
                        </div>
                    )}

                    {results.marlas > 0 && (
                        <div className="result-input">
                            <label>مرلہ میں رقبہ</label> {/* "Area in Marlas" */}
                            <input type="text" readOnly value={results.marlas} />
                        </div>
                    )}

                    {results.sarsai > 0 && (
                        <div className="result-input">
                            <label>سڑسائی/کرام میں رقبہ</label> {/* "Area in Sarsai/Karam" */}
                            <input type="text" readOnly value={results.sarsai} />
                        </div>
                    )}

                    {results.feet > 0 && (
                        <div className="result-input">
                            <label>فٹ میں رقبہ</label> {/* "Area in Feet" */}
                            <input type="text" readOnly value={results.feet} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
