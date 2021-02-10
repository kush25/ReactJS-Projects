import React , {Component} from 'react'

import './styles.css'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'


class TodoApp extends Component{
    render(){

        return(
            <div className="TodoApp">
               
                <BrowserRouter>
                <HeaderComponent/>
                <Switch>
                 <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                    <Route path="/todo" component={TodoComponent}/>
                    <Route component={ErrorComponent}/>
                
                    </Switch>
                    <FooterComponent/>
              
                </BrowserRouter>
                

               {/* <LoginComponent/>
               <WelcomeComponent/> */}
            </div>

        );
    }


}
   

class LoginComponent extends Component{

        constructor(){

            super()

                this.state = {
                    username:'kush',
                    password:'' ,
                    isInvalid:false,
                    isSuccess:false

                }

                // this.handleUsernameChange = this.handleUsernameChange.bind(this)
               //  this.handlePasswordChange = this.handlePasswordChange.bind(this)

                this.handleChange = this.handleChange.bind(this)
               this.loginClick = this.loginClick.bind(this)
            
        }

        handleChange(event){

            // console.log(this.state);

            this.setState(
                
                {
                    [event.target.name]:event.target.value
                }
                )
        }

       // instead of declaring a change for each element we declare one common for all elements as above
        // handlePasswordChange(event){

        //     console.log(event.target.value);
        //     this.setState({password:event.target.value})

        // }


        loginClick(event) {
            if(this.state.username==="kush" && this.state.password ==="kush123"){
                this.setState({isSuccess:true})
                this.setState({isInvalid:false})
                this.props.history.push(`/welcome/${this.state.username}`)
            }
              
            else{
                this.setState({isSuccess:false})
                this.setState({isInvalid:true})
            }

        }

    render(){

        return(

            <div className="LoginPage">
                {/* //the below two statements are connected to functions declare below. */}
                 {/* <ShowInvalidCredentials isInvalid={this.state.isInvalid} />
                 <ValidCredentials isSuccess={this.state.isSuccess}/> */}

                 {this.state.isInvalid && <div>Invalid Credentials</div> }
                 {this.state.isSuccess && <div>Login Success</div> }
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                Password: <input className="pass" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                 <br/>
                <button class="ButtonLogin" onClick={this.loginClick}>Log in</button>

            </div>

        )
        
    }

}


// function ShowInvalidCredentials(props){
//     if(props.isInvalid){
//         return <div>Invalid Credentials</div>
//     }
//     else{
//         return null
//     }
// }


// function ValidCredentials(props){
//     if(props.isSuccess){
//         return <div>Login Success</div>
//     }
//     else{
//         return null
//     }
// }


class WelcomeComponent extends Component{

    render(){


        return(

            <div> 
                <h1>Welcome {this.props.match.params.name} To React Success Login Page.</h1>
                <p>Manage your Todos <Link to="/todo"> here</Link></p> 
                
                </div>

        )


    }
}


class ErrorComponent extends Component{

    render(){
        return(
            <div>Error Wrong Page.Contact Support</div>
        )
    }
}


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
                <table>
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
        )
    }
}

export default TodoApp;