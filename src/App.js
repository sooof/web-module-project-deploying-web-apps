import React from 'react';

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './components/Todo.css'

const todolists =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
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
  
  handleClearItem = () =>{
    this.setState({
      ...this.state,
      todolists: todolists.filter(item => (!item.completed))
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoList todolists={this.state.todolists}/>
        <TodoForm/>
        <button onClick={this.handleClearItem} className="clear-btn">Clear Purchased</button>
      </div>
    );
  }
}

export default App;
