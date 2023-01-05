import React from 'react';
import { Trash } from 'phosphor-react'
import { TaskItem } from './styles';

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const Task: React.FC<TaskProps> = ({}) => {
  return (
    <TaskItem>
      <div>
        <input type="checkbox" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi error alias vitae fugiat eius culpa optio delectus ipsum placeat incidunt?</p>
      </div>
      <button>
        <Trash size={20} />
      </button>
    </TaskItem>
  );
};

export default Task;