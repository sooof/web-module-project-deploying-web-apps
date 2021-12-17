import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {

    render(){
        return(
            <div className="todo-list">
            {this.props.todolists.map(item => (
              <Todo handleToggleItem={this.props.handleToggleItem} key={item.id} item={item} />
            ))}
          </div>
        )
    }
}
export default TodoList;