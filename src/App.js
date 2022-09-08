import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputValue: '',
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  submit() {
    this.setState({
      tasks: [...this.state.tasks, this.state.inputValue]
    })
  }


  render () {

    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Task name...'></input>
        <button type='submit' onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;
