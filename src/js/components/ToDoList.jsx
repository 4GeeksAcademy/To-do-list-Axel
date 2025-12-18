import React, { useState } from "react";
//create your first component
const ToDoList = () => {

	const [tasks, setTasks] = useState(['sleep']);
	const [addTask, setAddTask] = useState('');

	function inputChange(e) {
		setAddTask(e.target.value)
	};
	function keyHandler(e) {
		if (e.key === 'Enter')
			if (addTask.trim() !== '') {
				setTasks([...tasks, addTask])
				setAddTask('')
			};
	};
	function removeTasks(index) {
		const newTask = tasks.filter((element, i) => i !== index);
		setTasks(newTask)
	}

	return (

		<>
		<h1 className="text-center my-5">todos</h1>
		<div className="col-4 card text-center mx-auto my-5">
			<div className="card-header mt-0 p-0">
				<input type="text" className="w-100 form-control text-break" value={addTask} onChange={inputChange} onKeyUp={keyHandler} />
			</div>
			<div className="card-body p-0 text-start">
				<ul className="listas">
					{tasks == '' ?  <p className="text-center">No hay tareas, añadir tareas.</p> : tasks.map((task, index) =>
						<div className="w-100 border-bottom p-3"><li className="d-flex justify-content-between hover align-items-center" id={index}>{task}<i
							onClick={() => removeTasks(index)}
							className="fa-solid fa-xmark" style={{color : 'red'}}></i></li></div>)}
				</ul>
			</div>
			<div className="card-footer text-body-secondary text-start">
				{tasks.length} items left.
			</div>
		</div>
		</>
	);
};
export default ToDoList;