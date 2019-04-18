import React, { Component } from 'react';

class ToDo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			listHtml: <span>Список пуст</span>
		};

		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
	}

	update = function(list) {
		let html = this.state.list.map((name, i) => (
				<div key={i} className="item">
					<label>
						<input type="checkbox" /> {name}
					</label>
					<button id="delete_item"data-id={i} onClick={this.remove}>x</button>
				</div>
				)
			);

		console.log(list);

		this.setState({
			listHtml: html
		});
	}

	remove = function(event) {
		let list = this.state.list,
			index = event.target.dataset.id;

		console.log(list);
		list.splice(index,1);
		console.log(list);

		this.update(list);
	}

	add = function(event) {
		if (event.key === 'Enter') {
			let list = this.state.list;

			list.push(event.target.value);
			this.update(list);
		}
	}

	render() {
		return (
			<div className="todo_class">
				<h1>{this.props.children}</h1>
				<label>
				    <span> Todolist</span>
					<input onKeyPress={this.add} className="name" type="text" placeholder="Новая задача" />
					<br /><p><i>Напишите и нажмите Enter для добавления</i></p>
				</label>
				<hr />
				<div className="list">{this.state.listHtml}</div>
			</div>
		);
	}
}

export default ToDo;
/*ReactDOM.render(
	<ToDo>Список задач</ToDo>,
	document.getElementById('ToDoList')
); */