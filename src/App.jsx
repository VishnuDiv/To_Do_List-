import './App.css';
import { Header } from "./components/Header";
import TodoList from './components/TodoList';

/**
 * The first component React will render.
 * The rest of your components must be inserted from here
 * @returns App
 */
export const App = () => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
};
