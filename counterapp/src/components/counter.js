
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import "./counter.css"




class Counter extends Component{


    constructor() {
        super();
        this.state = {
            ctr : 0
        }
    }


    render(){
        return(
            <div className="CApp">
            <CounterApp by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterApp by= {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterApp by= {10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
         
            <span className="spnctr">{this.state.ctr}</span>
            <div>
            <button className="reset" onClick={this.reset}>Reset</button>
            </div>

           </div>

        )
    }

    reset= () => {

        this.setState(
            () =>
              {
                  return {ctr: 0}
  
              }
  
        );

    }

    increment = (by) => {
        this.setState(
            (prevState) =>
              {
                  return {ctr: prevState.ctr + by}
  
              }
  
        );
        
      }

      
   decrement = (by) => {
        this.setState(
            (prevState) =>
              {
                  return {ctr: prevState.ctr - by}
  
              }
  
        );
      
        

      }

}

class CounterApp extends Component{

    constructor() {
        super();
        this.state = {
            ctr : 0
        }

       // this.increment = this.increment.bind(this)
       //this.decrement = this.decrement.bind(this)

    }

render(){
        return(

            <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            
            <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        )
        
    }

    increment = () => {
      // this.state.counter++;  //Bad Practice.

      this.setState(

            {
                ctr: this.state.ctr + this.props.by

            }

      );
      
      this.props.incrementMethod(this.props.by)
    }

    decrement = () => {
      
        this.setState(
    
              {
                  ctr: this.state.ctr - this.props.by
    
              }
    
        );
        
         this.props.decrementMethod(this.props.by)
      }
    



}




CounterApp.defaultProps = {

    by:1

}

CounterApp.propTypes= {
    by : PropTypes.number

}


export default Counter;