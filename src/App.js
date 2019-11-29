import React, { Component } from 'react'

class App extends Component {
  state = {
    userInput: ''
  }

  render() {
    return (
      <div className="App">

      inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
      }

      
      
      
      
      
      
      <input 
        type="text" 
        onChange={this.inputChangeHandler} 
        value={this.input.userInput}/>
      </div>
    )
  }
}

export default App;