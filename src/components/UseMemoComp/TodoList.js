import React, { useMemo } from 'react';

function TodoList(props) {
  const [todos, tab] = props;
  const visibleTodos = useMemo(() => {
    filterTodos(todos, tab);
  });

  return <div>
    <ul>
      {visibleTodos.map}
    </ul>
  </div>;
}

export default TodoList;
