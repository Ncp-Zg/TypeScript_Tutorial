import React, { useState } from "react";
import List from "./Components/List";
import "./App2.css"
import AddToList from "./Components/AddToList";

export interface IState {
    people:{
        name:string
        age:number
        url:string
        note?:string
    }[]
}

const App2 = () => {
  const [people, setPeople] = useState<IState["people"]>([{
      name:"asdads",
      age:22,
      url:"asdasd"
  }]);

  return (
    <div className="App">
        
      <h1>People Invited to our Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
};

export default App2;
