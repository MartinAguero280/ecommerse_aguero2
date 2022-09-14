
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {
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
				<Route path='/productos' exact element={<ItemListContainer />} />
				<Route path='/productos/:categoryId' element={<ItemListContainer />} />
				<Route path='/detalle/:productId' element={<ItemDetailContainer />} />
			</Routes>

		</div>
	)
}

export default App;
