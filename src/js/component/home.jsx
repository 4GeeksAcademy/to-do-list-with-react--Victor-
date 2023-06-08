import React from "react";
import { useState } from "react";



//create your first component
const Home = () => {
	const [task, setTask] = useState ("")
	const [todoList, setTodoList] = useState([])

	const handleChange = (e) => {
		setTask(e.target.value);
	  };
	
	  const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			if(task ==="") {alert ("type something")}
			else setTodoList([...todoList, task])
			setTask("")}
	  };
	

	  const removeElement = (e) => {
		const newList = todoList.filter((_, i) => i !== parseInt(e.target.id));
		setTodoList(newList);
	  };

	  const todoListLenght = todoList.length + " item left"
		
		

	return (
		<div className="page">
				<div className="todos d-justify-content-arround">todos
					<div className="square-list" >												
						<ul className="list">
						<input 
						type="text" 
						placeholder="Enter task" 
						value={task} 
						onChange={handleChange}					
						onKeyDown={handleKeyDown}/>	
							{todoList.length !== 0 && todoList.map((todoItem, idx) => {
								return <li key={idx} >{todoItem}
        						<button className="delete" id={idx} onClick={removeElement}>X</button>
      							</li>}
							)}							
						</ul>
					<div className="footer">{todoListLenght} </div>
					</div>
				</div>
		</div>
	);
};

export default Home;
