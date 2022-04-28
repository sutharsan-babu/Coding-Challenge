import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import './App.css';

const App = () => {
	return (
		<div className='app'>
			<h1>Todo App</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
}

export default App;
