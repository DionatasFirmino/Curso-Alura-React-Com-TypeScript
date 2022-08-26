import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/List';
import Stopwatch from '../components/stopwatch';
import { ITask } from '../components/types/task';
import Style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={Style.AppStyle}>
      <Form setTask={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
