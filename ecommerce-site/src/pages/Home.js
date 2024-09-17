
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const Home = () => {
	  const [products, setProducts] = useState([]);

	  useEffect(() => {
		      axios.get('/api/products')
		        .then(res => setProducts(res.data))
		        .catch(err => console.error(err));
		    }, []);

	  return (
		      <div className="product-list">
		        {products.map(product => (
				        <Product key={product.id} product={product} />
				      ))}
		      </div>
		    );
};

export default Home;
