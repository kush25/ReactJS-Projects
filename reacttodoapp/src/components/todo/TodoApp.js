import React , {Component} from 'react'

import './styles.css'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'


class TodoApp extends Component{
    render(){

        return(
            <div className="TodoApp">
               
                <BrowserRouter>
                <HeaderComponent/>
                <Switch>
                 <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todo" component={TodoComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
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
                AuthenticationService.registerSuccessLogin(this.state.username,this.state.password)
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
                <h1>Login</h1>

                <div className="container" id="lgnmain">
                {/* //the below two statements are connected to functions declare below. */}
                 {/* <ShowInvalidCredentials isInvalid={this.state.isInvalid} />
                 <ValidCredentials isSuccess={this.state.isSuccess}/> */}

                 {this.state.isInvalid && <div className="alert alert-warning">Invalid Credentials</div> }
                 
                 {/* {this.state.isSuccess && <div>Login Success</div> } */}
               
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                Password: <input className="pass" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                 <br/>
                <button className="btn btn-success" id="loginbtn" onClick={this.loginClick}>Log in</button>
                </div>
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



class LogoutComponent extends Component{

    render(){
        return(
            <div>
                <h3>Logout Success</h3>
                <h1 className="container">Thanks for using the Todo App</h1>
            </div>
        )
    }
}



export default TodoApp;