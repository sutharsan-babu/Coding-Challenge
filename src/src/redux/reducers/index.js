import { ADD_TODO, TOGGLE_TODO, FETCH_TODO, DELETE_TODO } from '../actionTypes';

const defaultState = {};

const todo = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_TODO: 
            return action.todos
        case ADD_TODO: 
            return [...state, action.payload]
        case TOGGLE_TODO: {
            const { id } = action.payload;
            const index = state.findIndex(todo => todo.id === id);
            state[index].status = state[index].status === 'pending' ? 'completed': 'pending';
            return [...state]
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            state = state.filter(todo => todo.id !== id);
            return [...state]
        }
        default:
        return state;
    }
};

export default todo;
