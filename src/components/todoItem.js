import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const deleteHandler = e =>{
		e.stopPropagation();
		dispatch(deleteTodo(todo.id));
	}
	return (
		<li className='todo-item' onClick={() => dispatch(toggleTodo(todo.id))}>
			<span className={todo && todo.status === 'completed' ? 'completed':'pending'}>
				{todo.title}
			</span>
			<button onClick={e => deleteHandler(e)}>X</button>
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object
}

export default TodoItem;
