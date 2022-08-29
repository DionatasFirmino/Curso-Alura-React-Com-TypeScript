import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/List';
import Stopwatch from '../components/stopwatch';
import { ITask } from '../components/types/task';
import Style from './App.module.scss';

function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [taskSelected, setTaskSelected] = useState<ITask>()

	function selectTask(taskSelected: ITask) {
		setTaskSelected(taskSelected);
		setTasks(tasksOld => tasksOld.map(task => ({
			...task,
			selecionado: task.id === taskSelected.id
		})))
	}

	function finishTask() {
		if (taskSelected) {
			setTaskSelected(undefined);
			setTasks(tasksOld => tasksOld.map(task => {
				if (task.id === taskSelected.id) {
					return {
						...task,
						selecionado: false,
						completado: true
					}
				}
				return task;
			}))
		}
	}

	return (
		<div className={Style.AppStyle}>
			<Form setTask={setTasks} />
			<List
				tasks={tasks}
				selectTask={selectTask}
			/>
			<Stopwatch
				taskSelected={taskSelected}
				finishTask={finishTask}
			/>
		</div>
	);
}

export default App;
