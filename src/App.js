
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
				<ItemListContainer greeting="Hola esto es una prueba de props"/>
			</header>
		</div>
	)
}

export default App;
