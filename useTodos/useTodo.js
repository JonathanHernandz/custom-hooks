import { useEffect, useReducer } from "react";
import { todoReducer } from './todoReducer';

const init = ( ) =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    
    }, [todos])

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action); 
    }

    const handlDeleteTodo = (id) =>{
        // console.log('Toasdlkhasdklsh')
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id)=>{
        console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
    //todosCount, pendingTodosCount
  return{
        todos, 
        handlDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo, 
        todosCount:todos.length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length,
    } 
  
  
}
