import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
	const [title, setTitle] = useState('');
	const [hasError,toggleError] = useState(false);
	const dispatch = useDispatch();
	const validateForm = () =>{
		if(title.trim() !== '')
		{
			toggleError(false);
			dispatch(addTodo(title))
		}
		else{
			toggleError(true);
		}
	}

	return (
		<div className='todo-add'>
			<input onBlur={e => setTitle(e.target.value)} />
			<button onClick={() => validateForm()}>
				Add Todo
			</button>
			{hasError && <span className='error'>Please Enter Value</span>}
		</div>
	);
};

export default AddTodo;
