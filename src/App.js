import { Component } from "react";
 import Greet from "./component/Greet";
import Greettwo from "./component/Greettwo";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import Notification from "./component/Notification";
class App extends Component{
 render(){
  return(
    <div className="App">
      <Notification/>
      <Greet/>
      <Counter/>
      <Message/>
      <Hello/>
      <Greettwo name="Brahma">
        <button>OK</button>
      </Greettwo>
      <Greettwo name="Vishnu">
        <p>This is lord Vishnu</p>
      </Greettwo>
      <Greettwo name="Mahesh">
      <button>Test button</button>
      </Greettwo>
      <Welcome name="Narayan">
        <p>Narayan hari</p>
      </Welcome>
      <Welcome name="Govind">
        <button>Hi</button>
      </Welcome>
      <Welcome name="Shivhari"/>
      </div>
  )
 }
}

export default App;

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
