import { PlusCircle } from 'phosphor-react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { ITask, Tasks } from '../../components/Tasks';
import { CountersContainer, CreatedCounter, FinishedCounter, FormContainer, HomeContainer } from './styles';

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const tasksCount = tasks.length
  const completedTasksCount = tasks.filter(task => task.isCompleted).length
  const [title, setTitle] = useState('')

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('@todo:tasks-1.0.0')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    return;
  }

  useEffect(() => {
    loadTasks();
  }, []);

  const setAndSaveTasks = (newTasks: ITask[]) => {
    setTasks(newTasks)
    localStorage.setItem('@todo:tasks-1.0.0', JSON.stringify(newTasks));
  }

  const addTask = (taskTitle: string) => {
    setAndSaveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setAndSaveTasks(newTasks)
  }

  const handleToggleCompletedTask = (taskId: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setAndSaveTasks(newTasks)
  }

  const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <HomeContainer>
      <FormContainer method='' action=''>
        <input type="text" placeholder="Adicione uma nova tarefa" value={title} onChange={handleSetTitle} />
        <button onClick={() => addTask(title)}> Criar <PlusCircle size={20} /> </button>
      </FormContainer>
      <CountersContainer>
        <CreatedCounter>Tarefas criadas <span>{tasksCount}</span></CreatedCounter>
        <FinishedCounter>Concluídas <span>{completedTasksCount} de {tasksCount}</span></FinishedCounter>
      </CountersContainer>
      <Tasks onComplete={handleToggleCompletedTask} onDelete={deleteTask} tasks={tasks} />
    </HomeContainer>
  );
};