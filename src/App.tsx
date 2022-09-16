import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import { Button } from './components/Button/Button'
import { PlusCircle, ClipboardText  } from 'phosphor-react';
import { v4 as uuid } from 'uuid';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { tasks } from './data/dataTasks'
import { Task } from './components/Task/Task'

function App() {

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [taskList, setTaskList] = useState(tasks);
  const [doneTasks, setDoneTasks] = useState(0);

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskTitle(event.target.value);
  }

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Dê um nome a nova tarefa.')
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuid(),
      title: newTaskTitle,
      isDone: false,
    };

    setTaskList(state => [...state, newTask]);
    setNewTaskTitle('');
  }

  function handleTaskToogle(taskId: string) {
    const newToogledTasks = taskList.map(task => {
      task.id === taskId && (task.isDone = !task.isDone);
      return task;
    })
    setTaskList(newToogledTasks);
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeleted = taskList.filter(task => task.id != taskId);
    setTaskList(tasksWithoutDeleted);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <form className={styles.taskForm} onSubmit={handleCreateTask}>
          <Input
            placeholder='Adicione uma nova tarefa'
            type="text"
            value={newTaskTitle}
            onChange={handleChangeTask}
            required
            onInvalid={handleInvalidTask}
          />

          <Button type='submit' title={"Criar"}>
            <>Criar</>
            <PlusCircle size={15} />
          </Button>
        </form>

        <div className={styles.taskCountersWrapper}>
          <div className={styles.taskCounter}>
            Tasks <span>{taskList.length}</span>
          </div>

          <span className={styles.doneTasksCounter}>
            Concluidas <span>{taskList.filter((done) => done.isDone).length} de {taskList.length}</span>
          </span>
        </div>

        <div className={styles.taskList}>
          {taskList.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                onCheck={handleTaskToogle}
                onDelete={handleDeleteTask}
              />
            )
          })}

          {taskList.length === 0 && (
            <div className={styles.noTasks}>
              <ClipboardText  size={56} />
              <b>Você ainda não tem tarefas cadastradas</b>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default App
