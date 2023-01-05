import { Check, ClipboardText, Trash } from 'phosphor-react';
import React from 'react';
import { CheckedCheckbox, EmptyCheckbox, EmptyTasksContainer, TaskItem, TasksContainer } from './styles';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TasksProps {
  task?: ITask
  tasks: ITask[]
  onComplete: (taskId: string) => void
  onDelete: (taskId: string) => void
}

export const Tasks: React.FC<TasksProps> = ({ task, tasks, onComplete, onDelete }) => {

  return (
    <TasksContainer>
      {tasks.map(task => {
        return (
          <TaskItem key={task.id}>
            <div>
              <button onClick={() => onComplete(task.id)}>
                {task.isCompleted ? (
                  <CheckedCheckbox>
                    <Check />
                  </CheckedCheckbox>
                ) : <EmptyCheckbox />}
              </button>
                <p>
                {task.isCompleted ? <s>{task.title}</s> : task.title}
                </p>
            </div>
            <button onClick={() => onDelete(task.id)}>
              <Trash size={20} />
            </button>
          </TaskItem>
        )
      })}

      {tasks.length === 0 && (
        <EmptyTasksContainer>
          <ClipboardText size={48} />

          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </EmptyTasksContainer>
      )}
    </TasksContainer>

  );
};