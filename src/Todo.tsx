import React from 'react'

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}
interface TodoInput {
  list: TodoType[];
}

const Todo: React.FC<TodoInput> = ({list}) => {
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo