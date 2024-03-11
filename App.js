// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (value) => {
//     setInput((prevInput) => prevInput + value);
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult('');
//   };

//   const handleCalculate = () => {
//     try {
//       setResult(eval(input).toString());
//     } catch (error) {
//       setResult('Error');
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} readOnly />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <div className="row">
//           <button onClick={() => handleButtonClick('7')}>7</button>
//           <button onClick={() => handleButtonClick('8')}>8</button>
//           <button onClick={() => handleButtonClick('9')}>9</button>
//           <button onClick={() => handleButtonClick('/')}>/</button>
//         </div>
//         <div className="row">
//           <button onClick={() => handleButtonClick('4')}>4</button>
//           <button onClick={() => handleButtonClick('5')}>5</button>
//           <button onClick={() => handleButtonClick('6')}>6</button>
//           <button onClick={() => handleButtonClick('*')}>*</button>
//         </div>
//         <div className="row">
//           <button onClick={() => handleButtonClick('1')}>1</button>
//           <button onClick={() => handleButtonClick('2')}>2</button>
//           <button onClick={() => handleButtonClick('3')}>3</button>
//           <button onClick={() => handleButtonClick('-')}>-</button>
//         </div>
//         <div className="row">
//           <button onClick={() => handleButtonClick('0')}>0</button>
//           <button onClick={handleClear}>C</button>
//           <button onClick={handleCalculate}>=</button>
//           <button onClick={() => handleButtonClick('+')}>+</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, {useState} from 'react';
import './App.css' ;

const App=()=>{

  return(
    <div className="calc">
     < input type="text" placeholder="0" id="answer"/>
     < input type="button" value="9" className="button"/>
     < input type="button" value="8" className="button"/>
     < input type="button" value="7" className="button"/>
     < input type="button" value="6" className="button"/>
     < input type="button" value="5" className="button"/>
     < input type="button" value="4" className="button"/>
     < input type="button" value="3" className="button"/>
     < input type="button" value="2" className="button"/>
     < input type="button" value="1" className="button"/>
     < input type="button" value="0" className="button"/>
     < input type="button" value="+" className="button"/>
     < input type="button" value="-" className="button"/>
     < input type="button" value="/" className="button"/>
     < input type="button" value="*" className="button"/>
     < input type="button" value="." className="button"/>
     < input type="button" value="%" className="button"/>
     < input type="button" value="AC" className="button1"/>
     < input type="button" value="=" className="button2"/>
    </div>
  )
}

export default App;