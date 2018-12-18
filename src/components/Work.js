import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { addTask, deleteTask } from '../actions/actionWork';
import { connect } from 'react-redux';

import AddForm from './AddForm';

class Work extends PureComponent {
  render() {
    return (
      <div>
        <AddForm onSave={this.props.addTask} />
        <div>
          <h2>Work</h2>
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
  todos: state.workReducer.workItems
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTask,
      deleteTask
    },
    dispatch
  )



export default connect(mapStateToProps, mapDispatchToProps)(Work);
