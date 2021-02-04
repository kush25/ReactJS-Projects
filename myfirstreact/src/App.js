// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Details from './Details';

function App(){

  const greetings ="Hello World";

  const details = {
    fname:'Kush',
    lname:'Gandhi'
  }

  function getMessage(){
    return "Welcome to React";
  }

  return(

    <div>
        <h1>Learn React</h1>
        {/* method to declare variables  */}
        <h1>{greetings}</h1> 

        <h2>{details.fname} {details.lname}</h2>
       
       {/* Functions can also be called as below */}
        <h2>{getMessage()}</h2>

        {/* Method from other file(Details.js) is called here */}
        <h2>{Details()}</h2>
    </div>


  );
}
export default App;

