import AuthenticationService from "./AuthenticationService";
import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'



class AuthendicatedRoute extends Component{
        render(){
                    
           if(AuthenticationService.isUserLoggedIn()){

           return  <Route {...this.props}/>
                }

            else{
           return  <Redirect to="/login"/>
        }


               
        }

       


}
export default AuthendicatedRoute;