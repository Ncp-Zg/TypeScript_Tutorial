import React, { useState } from "react";
import List from "./Components/List";
import "./App2.css"
import AddToList from "./Components/AddToList";

interface IState {
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
      <AddToList/>
    </div>
  );
};

export default App2;
