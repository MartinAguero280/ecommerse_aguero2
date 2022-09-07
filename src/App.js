
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className='App'>

			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path='/' exact element={<ItemListContainer greeting="Hola esto es una prueba de props"/>} />
				<Route path='/ItemDetail' exact element={<ItemDetailContainer />} />
			</Routes>

		</div>
	)
}

export default App;
