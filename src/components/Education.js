import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { addTask, deleteTask } from '../actions/actionEducation';
import { connect } from 'react-redux';

import AddForm from './AddForm';

class Education extends PureComponent {
  render() {
    return (
      <div>
        <AddForm onSave={this.props.addTask} />
        <div>
          <h2>Education</h2>
          <div>
            {this.props.todos.map(todo =>
              <div key={todo.id} onClick={() => this.props.deleteTask(todo.id)}>
                <span>{todo.task}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.educationReducer.educationItems
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask,
      deleteTask
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Education);