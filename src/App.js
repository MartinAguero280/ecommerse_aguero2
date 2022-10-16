import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<div className='App'>
					<header>
						<NavBar />
					</header>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/productos' element={<ItemListContainer />} />
						<Route path='/productos/:categoryId' element={<ItemListContainer />} />
						<Route path='/detalle/:productId' element={<ItemDetailContainer />} />
						<Route path='/carrito' element= {<CartContainer key={1}/>} />
					</Routes>
					<Footer/>
				</div>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App;
