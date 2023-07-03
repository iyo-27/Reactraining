import React, {Component} from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component{

  constructor(props){
    super()
    this.title = props.title
    this.state = {
      msg:"count start",
      counter:0,
    }

    this.doAction = this.doAction.bind(this)
  }

  doAction(event){
    this.setState({
        counter:this.state.counter + 1,
        msg:"*** count: " + this.state.counter + " ***"
    })
  }

  render(){

    return (
      <div>
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>{this.title}</p>
          <p className='alert alert-warning'>{this.state.msg}</p>
          <button className='btn btn-primary' onClick={this.doAction}>Click</button>
        </div>
      </div>
    );
  }
}

export default App;
