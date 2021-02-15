

import React,{Component} from 'react'

class TodoComponent extends Component{

    constructor(props){
        super(props)
        this.state ={

            todo:[
                {id:1,descrip:'Learn React',done:true,targetDate: new Date()} , 
                {id:2,descrip:'Learn JWT',done:true,targetDate:new Date()}
            ]
        }


    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>

                <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map(
                                todo =>
                                <tr>
                                <td>{todo.id}</td>
                                <td>{todo.descrip}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>

                            )
                        }
                  
                    </tbody>
                </table>

                </div>
            </div>
        )
    }
}




export default TodoComponent;