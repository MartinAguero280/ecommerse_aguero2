
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<ItemListContainer greeting="Hola esto es una prueba de props"/>
		</div>
	)
}

export default App;
