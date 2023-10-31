import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);

    function compute() {
        if (isNaN(num1) || isNaN(num2)) {
            setResult('Invalid input');
        } else {
            switch (operator) {
                case '+':
                    setResult(num1 + num2);
                    break;
                case '-':
                    setResult(num1 - num2);
                    break;
                case '*':
                    setResult(num1 * num2);
                    break;
                case '/':
                    if (num2 !== 0) {
                        setResult(num1 / num2);
                    } else {
                        setResult('Cannot divide by zero');
                    }
                    break;
                default:
                    setResult('Invalid operator');
                    break;
            }
        }
    }

    return (
        <div>
            <div>
                First: <input value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            </div>
            <div>
                Second: <input value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            </div>
            <div>
                Operator:
                <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <button onClick={compute}>Compute</button>
            <p>Result: {result}</p>
        </div>
    );
}

export default Calculator;
