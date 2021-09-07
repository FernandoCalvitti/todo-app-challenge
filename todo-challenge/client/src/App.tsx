import TodoProvider from './context/todos/Provider';
import ButtonAdd from './components/ButtonAdd';
import Header from './components/Header'
import PopUp from './components/PopUp';
import Todos from './components/Todos';

function App() {
	return (
		<div className="App">
			<TodoProvider>
				<Header></Header>
				<Todos></Todos>
				<ButtonAdd></ButtonAdd>		
				<PopUp></PopUp>
			</TodoProvider>
		</div>
	);
}

export default App;
