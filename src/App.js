import React from "react";

import "./App.css"


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  addItem(todoValue){
if(todoValue!==""){
  const newItem={
    id:Date.now(),
    value:todoValue,
    isDone:false
  };
  const list=[...this.state.list]
  list.push(newItem);
  this.setState({
    list,
    newItem:""
  });
}
  }


  deleteItem(id){
   const list=[...this.state.list];
  const updatedList=list.filter(item=>item.id!==id);
  this.setState({list:updatedList})
  }

  updateInput(input){
this.setState({newItem:input});
  }
render(){
  return(

    <div className="item">
Add here.. <br/>
<input

type="text"
className="input-text"
placeholder="Add your Todos..."
required
value={this.state.newItem}
onChange={e=>this.updateInput(e.target.value)}
/>
<button
onClick={()=>this.addItem(this.state.newItem)}
disabled={!this.state.newItem.length}
className="add-btn">Add Todo</button>
<div className="list">

<ul className="back-ground">
{
 this.state.list.map(item=>{
    return(
      <li key={item.id}>

        <input type="checkbox"
        name="isDone"
       
        checked={item.isDone}
        onChange={()=>{}}/>
        {item.value}
        <button
        className="dlt-btn"
        onClick={()=>this.deleteItem(item.id)}
        
        >X</button>

      </li>
    )
  })
}

  <li className="ulist">

<input className="input-box" type="checkbox"/>
go to gym
<button className="dlt-btn">X</button>

  </li>
</ul>


</div>



    </div>
  );
}


};


export default App;