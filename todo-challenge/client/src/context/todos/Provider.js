import TodoContext from "./index"
import { useState } from "react"


export default function TodoProvider ({ children }) {
	
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");	
	const api_base = 'http://localhost:3001';
	
    //Function to get todos

    const GetTodos = () => {
		fetch('http://localhost:3001/todos')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
		}


    //Function to sort todos by completed
	const SortTodos = () => {
        todos.sort(function (a, b) {
           return b.complete - a.complete
       })
   	}
   	SortTodos()


    //Function to Check Todo!

	const completeTodo = async id => {
		try{
			const data = await fetch(api_base + '/todo/complete/' + id).then(res => res.json());
			console.log("//////////////////////// Checked Todos: ////////////////////////")
	
			setTodos(todos => todos.map(todo => {
				if (todo._id === data._id) {
					todo.complete = data.complete;
				} if (todo.complete && data._id !== undefined) {
					console.log(todo.text);				
				} 
				return todo;
			}));

		}catch(error){
			console.error(error)
		}

	}

    // Function to add todo
    const addTodo = async () => {
		try {
			const data = await fetch(api_base + "/todo/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json" 
				},
				body: JSON.stringify({
					text: newTodo
				})
			}).then(res => res.json());
	
			setTodos([...todos, data]);
	
			setPopupActive(false);
			setNewTodo("");

		}catch(error){
			console.error(error)
		}
	}

    //Delete todo
	const deleteTodo = async id => {
		try {
			const data = await fetch(api_base + '/todo/delete/' + id,
			{ method: "DELETE" }).then(res => res.json());
	
			setTodos(todos => todos.filter(todo => todo._id !== data._id));
			
		} catch (error) {
			console.error(error)
		}
	}
    
    return(
        <TodoContext.Provider value={{
         todos, setTodos, popupActive, setPopupActive,
		 newTodo, setNewTodo, api_base, GetTodos, 
		 deleteTodo, addTodo, completeTodo
         }}>
            {children}
        </TodoContext.Provider>
    )
}