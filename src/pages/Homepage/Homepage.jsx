import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Homepage() {

    const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
	};

	return (
		<div className="container mt-5">
			<div class="d-grid gap-2 col-6 mx-auto">
  			<button class="btn active" data-bs-toggle="button" aria-pressed="true" type="button">
				<Link to={"/addproduct"}>Ürün Ekle</Link>
			</button>
		</div>
			<div className="row">
				{products.map(product => (			
						<ProductCard product={product} />
				))}
			</div>
		</div>
	);
}
