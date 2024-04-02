export const initTodos = () => {
  const todos = [];
  for (let i = 0; i < 10; i++) {
    todos.push({
      id: i,
      text: 'To do ' + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
};
