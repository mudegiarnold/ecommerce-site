import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
	  return (
		      <Router>
		        <div>
		          <Header />
		          <Routes>
		            <Route path="/" element={<Home />} />
		            <Route path="/product/:id" element={<ProductDetail />} />
		            <Route path="/cart" element={<Cart />} />
		            <Route path="/checkout" element={<Checkout />} />
		            <Route path="/login" element={<Login />} />
		          </Routes>
		          <Footer />
		        </div>
		      </Router>
		    );
}

export default App;
