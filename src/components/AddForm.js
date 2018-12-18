import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import getUniqueId from '../helper/getUniqueId';


class AddForm extends PureComponent {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
	}

	constructor() {
		super();
		this.state = {
			task: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault();
		const task = {
			id: getUniqueId(),
			task: this.state.task
		};
		this.setState({ task: '' });
		this.props.onSave(task);

	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label>Add task:</label>
					<input name="task" type="text" onChange={this.onChange} value={this.state.task} />
					<button type="submit">Add task</button>
				</form>
			</div>
		)
	}
}




export default AddForm;