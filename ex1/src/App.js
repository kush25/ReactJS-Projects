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





import React, { Component } from 'react';
import MyFirstComponent, {MySecondComponent} from './components/learning-examples/FirstComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        App

        <MyFirstComponent/>
        <MySecondComponent/>
        <ThirdComponent/>
        <MyFourthComponent/>
      </div>

      
    );
  }
}


class MyFourthComponent extends Component {
  render() {
    return (
    <div className="myfourthCompo">
            MyFourthComponent
      </div>
  
    );
  }
}

export default App;
