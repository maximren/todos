import React, { PureComponent } from 'react';
import AddForm from './AddForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, deleteTask } from '../actions/actionOwn';

class Own extends PureComponent {
  render() {
    return (
      <>
        <AddForm onSave={this.props.addTask}/>
        <div>
          <h2>Tasks</h2>
          <div>
            {this.props.todos.map(todo =>
              <div key={todo.id} onClick={() => this.props.deleteTask(todo.id)}>
                <span>{todo.task}</span>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

const mapStatetoProps = state => ({
  todos: state.ownReducer.ownItems
})

const mapDisptachToProps = dispatch =>
  bindActionCreators(
    {
      addTask,
      deleteTask
    },
    dispatch
  )



export default connect(mapStatetoProps, mapDisptachToProps)(Own);