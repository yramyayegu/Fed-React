import React from 'react'
import angularlogo from './images/angular.png';
import reactlogo from './images/react.png';
import backbonelogo from './images/backbone.png';
import vuelogo from './images/vue.png';
import './App.css';
import Image from "./Image";
import Button from "./Button";

class App extends React.Component{
  state={
    Heading : "React Assignment",
    number : 0,
    num : [{
      image : angularlogo,
      language : "Angular JS",
    },
    {
      image : reactlogo,
      language : "React JS",
    },{
      image : backbonelogo,
      language : "Backbone JS",
    },
    {
      image : vuelogo,
      language : "Vue JS",
    },
  ]}
  
  render(){
    let changeHandle = (action) => {
       let num = null;
      if(action === '+')
      {
        num = this.state.number+1
      }else{
        num = this.state.number-1
      }
    if(num>3){  num = 0 }
    if(num<0){  num = 3 }
      this.setState({number : num})

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> {this.state.Heading} </h1>
        <div style={{display:'flex'}}>
            <Button action="-" fun={changeHandle}>  </Button>
              <div>
                <Image image={this.state.num[this.state.number].image} language={this.state.num[this.state.number].language}  ></Image>
                <p>{this.state.number} </p>
              </div>
            <Button action="+" fun={changeHandle}>  </Button>
        </div>
      </header>
    </div>
  );
}
}
export default App;
