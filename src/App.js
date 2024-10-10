//import Greet from "./component/Greet";
import Sampleitem from "./component/Sampleitem";
import ErrorMessage from "./component/ErrorMessage";
import Greettwo from "./component/Greettwo";
import ListItems from "./component/ListItems";
import MyForm from "./component/MyForm";
import NumberCount from "./component/NumberCount";
import people from "./data";
import Welcome from "./component/Welcome";
import Panel from "./component/Panel";
import { useState, useEffect } from "react";
//import Hello from "./component/Hello";
//import Message from "./component/Message";
//import Counter from "./component/Counter";

//import ItemList from "./component/ItemList";
// class App extends Component{

//   constructor(){
//     super();
//     this.state={
//       email:"shivhari@om.com"
//     }
//   }

//  render(){
//  const todos = [
//   {
//     name:"ABC",
//     city:"Mum"
//   },
//   {
//     name:"XyZ",
//     city:"Del"
//   }
//  ]
//   return(

//     <div className="App">
//       <ItemList todolist={todos}/>
//        <Details email={this.state.email} />
//        <button onClick={()=>this.setState({email:"hari@om.com"})}>Change Email</button>
//       <Notification/>
//       <Greet/>
//       <Counter/>
//       <Message/>
//       <Hello/>
//       <Greettwo name="Brahma">
//         <button>OK</button>
//       </Greettwo>
//       <Greettwo name="Vishnu">
//         <p>This is lord Vishnu</p>
//       </Greettwo>
//       <Greettwo name="Mahesh">
//       <button>Test button</button>
//       </Greettwo>
//       <Welcome name="Narayan">
//         <p>Narayan hari</p>
//       </Welcome>
//       <Welcome name="Govind">
//         <button>Hi</button>
//       </Welcome>
//       <Welcome name="Shivhari"/>
//       </div>
//   )
//  }
// }

//export default App;

// import logo from './logo.svg';
// import './App.css';
const today = new Date();
function formatdate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
function App() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return clearTimeout(() => timer);
  }, []);
  const todos = [
    {
      fname: "ABC",
      city: "Mum",
    },
    {
      fname: "XyZ",
      city: "Del",
    },
  ];

  const checktodo = ["A", "B", "C", "D"];
  // let check = checktodo.length === 0 ? <h3>No record </h3> : null;
  const peoplelist = people.filter((el) => el.profession === "mathematician");

  const plist = peoplelist.map((el) => (
    <li key={el}>
      {el.name}|{el.profession}
    </li>
  ));

  return (
    <div className="App">
      <Panel
        title="About"
        isOpen={isActive === true}
        onShow={() => setActive(true)}
        children
      >
        Panel with content for testing
      </Panel>
      <Panel
        title="Services"
        isOpen={isActive === false}
        onShow={() => setActive(false)}
        children
      >
        Services Panel with content for testing
      </Panel>
      <p>----x-----</p>
      timer count {count}
      <Welcome name="Narayan"> </Welcome>
      <NumberCount></NumberCount>
      <h4>{formatdate(today)}</h4>
      <MyForm></MyForm>
      <Sampleitem item={checktodo}></Sampleitem>
      <ErrorMessage item={checktodo}></ErrorMessage>
      <ListItems id="1" name="Rasgulla" check={true} list={todos}></ListItems>
      {/* <ListItems id="2" name="Icecream" check={true}></ListItems>
      <ListItems id="3" name="Rabdi" check={false}></ListItems>
      <ListItems id="4" name="Gulabjamun" check={true}></ListItems> */}
      <Greettwo
        personname={"myfriend"}
        sampleobj={{ city: "mumbai" }}
      ></Greettwo>
      {/* <ItemList todolist={todos} /> */}
      <h5>----x-----</h5>
      <ul>{plist}</ul>
    </div>
  );
}

export default App;
