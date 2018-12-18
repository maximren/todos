import { createStore, combineReducers } from 'redux';

import ownReducer from './reducers/ownReducer';
import workReducer from './reducers/workReducer';
import educationReducer from './reducers/educationReducer';


const rootReducer = combineReducers({
	ownReducer,
	workReducer,
	educationReducer
})

const saveToLocalStorage = state => {
	try {
		const saveState = JSON.stringify(state);
		localStorage.setItem('state', saveState);
	} catch (e) {
		console.log(e)
	}
}

let lcState = {}
try {
	lcState = JSON.parse(localStorage.getItem('state'))
}
catch {
}

const initialState = lcState ? lcState : {};


const store = createStore(
	rootReducer,
	initialState,
)

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;