import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionTypes';
import { getDate, generateRandomId } from '../utils';

export const addTodo = title => {
	let id = generateRandomId();
  	return{
		type: ADD_TODO,
		payload: {
			id: id,
			user_id: id,
			title,
			due_on: getDate(),
			status: 'pending'
		}
	}
};

export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	payload: { id }
});

export const deleteTodo = id => ({
	type: DELETE_TODO,
	payload: { id }
});
