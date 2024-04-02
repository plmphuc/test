import 'App.css';
import { useState } from 'react';
import { initTodos } from './utils/utils';
import TodoList from './TodoList';

// Let you cache the result of a calculation between re-renders
const todos = initTodos();

function UseMemoComp(props) {
  const [tab, setTab] = useState('all');

  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <button onClick={() => setTab('all')}>All</button>
          <button onClick={() => setTab('active')}> Active</button>
          <button onClick={() => setTab('completed')}>Completed</button>
        </div>
        <div>
          <TodoList todos = {todos} tab={tab}/>
        </div>
      </div>
    </div>
  );
}

export default UseMemoComp;
