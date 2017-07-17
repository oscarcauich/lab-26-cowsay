// import './style/main.scss';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'hello world',
      content: 'Click on Button',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    this.setState((state) => {
      return {
        content: `${faker.lorem.sentence()}`
      }
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}> Click on This Button</button>
        <pre>
         {cowsay.say({
     	text : `${this.state.content}`,
     	e : "oO",
     	T : "U "
     })}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
