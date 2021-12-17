import React from 'react';

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './style.css';

const todolists =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]; 

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todolists: todolists
    }
  }
  
  render() {
    return (
      <div className="App">
         <h1>Todo List</h1>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoList todolists={this.state.todolists}/>
        <TodoForm/>

      </div>
    );
  }
}

export default App;
