import React, {Component} from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component{

  constructor(props){
    super()
    this.title = props.title
    this.state = {
      msg:"Hello Component",
      count:0,
    }

    let timer =setInterval(()=>{
      this.setState({
        count:this.state.count + 1,
        msg:"[count:" + this.state.count + "]"
      })
    }, 1000)
  }



  render(){

    return (
      <div>
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <p className='subtitle'>{this.title}</p>
          <p className='alert alert-warning'>{this.state.msg}</p>
          <p className='alert alert-dark'>{this.props.msg}</p>
        </div>
      </div>
    );
  }
}

export default App;
