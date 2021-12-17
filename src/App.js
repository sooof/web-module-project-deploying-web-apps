import React from 'react';

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './components/Todo.css'

const todolists =[
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: true
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
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
      todolists: this.state.todolists.filter(item => (!item.completed))
    })
  }
  handleAddItem = item => {
    console.log("App add Item")
    const newTodoItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todolists: [...this.state.todolists, newTodoItem]
    })
    console.log("App this.state = ", this.state);
  }

  handleToggleItem = (item) => {
    console.log("handleToggleItem")
    this.setState({
      ...this.state,
      todolists: this.state.todolists.map(todolist=>{
        if(todolist.id === item.id){
          return{
            ...todolist,
            completed: !todolist.completed
          }
        }
        return todolist
        
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoList handleToggleItem={this.handleToggleItem} todolists={this.state.todolists}/>
        <TodoForm handleAddItem={this.handleAddItem} />
        <button onClick={this.handleClearItem} className="clear-btn">Clear Purchased</button>
      </div>
    );
  }
}

export default App;
