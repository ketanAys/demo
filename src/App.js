import React from "react";
import './App.css';

function Search(props){ 
  let value;
  
  function on_Change(e){
    value= e.target.value;
  }

  function on_Submit(){
    props.tableValue(value);
  }
  return(
    <div id="searchBar">
<img src={("./search log.jpg")} alt="Search" width="18" height="18" />
    <input type="text" id="search" name="search" onChange={on_Change}/>
    <input type="button" value="Search" onClick={on_Submit}/>
    <input type="button" value="Clear"/>
    </div>
  )

}

function Table(){
  return(
<div>
  <table id="table">

  </table>
</div>

  );
}



function App() {
  function getValue(value){
    console.log(value)
  }
  return (
    <div id="App">
      
      <Search tableValue={getValue}/>
      <Table/>
    </div>
  );
}

export default App;
