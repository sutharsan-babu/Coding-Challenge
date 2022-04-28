import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './todoItem';
import { FETCH_TODO } from '../redux/actionTypes';
import { setItem, getItem } from '../utils';
import { HOST_NAME,API_CALLS } from '../config';

const TodoList = () => {
    const todos = useSelector(store => store);
    const dispatch = useDispatch();
	useEffect(()=>{
		const sessionData = getItem();
		if(sessionData === null)
		{
			fetch(HOST_NAME+API_CALLS.FETCH_TODO)
			.then(res => res.json())
			.then(todos => dispatch({ type: FETCH_TODO, todos: todos.data }))
		}
		else{
			dispatch({ type: FETCH_TODO, todos: sessionData })
		}
	},[dispatch])

	useEffect(()=>{
		setItem(todos)
	},[todos])

    return (
		<ul className='todo-list'>
			{todos && todos.length ? 
				todos.map(item => {
					return <TodoItem key={`todo-${item.id}`} todo={item} />;
				})
				: <p className='no-result'>No Todos</p>}
		</ul>
    );
};

export default TodoList;
