import React, { Component } from 'react';

class Students extends Component {
  render() {
    const { students } = this.props;
    const studentList = students.map(student => {
      return (
        <div className="student" key={student.id}>
          <div>Name: {student.name}</div>
          <div>Age: {student.age}</div>
          <div>Role: {student.role}</div>
        </div>
      );
    });
    return <div className="student-list">{studentList}</div>;
  }
}
export default Students;
