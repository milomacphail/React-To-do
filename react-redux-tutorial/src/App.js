import React, { Component } from 'react';
import Students from './Students';

class App extends Component {
  state = {
    students: [
      { name: 'Milo', age: 31, role: 'teacher', id: 1 },
      { name: 'Jacob', age: 31, role: 'baby', id: 2 },
      { name: 'Isaac', age: 31, role: 'student', id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <p>Welcome!</p>
        <Students students={this.state.students} />
      </div>
    );
  }
}
export default App;
