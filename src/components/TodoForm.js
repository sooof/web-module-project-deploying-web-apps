import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }



    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        })
        console.log("TodoFrom this.state = ", this.state);
    }
    handleClick = e => {
        e.preventDefault();
        console.log("TodoFrom add")
        // this.props.handleAddItem("ddd")
        this.props.handleAddItem(this.state.input)
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type="text" name="item" />
                    <button onClick={this.handleClick}>Add Todo</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;