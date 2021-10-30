import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
	const product = useSelector((state) => state.product);
	const { productId } = useParams();
	const dispatch = useDispatch();
	console.log(product);

	const fetchProductDetail = async () => {
		const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
			console.error('Err', err);
		});

		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail();
	}, [productId]);

	return (
		<div>

		</div>
	);
};

export default ProductDetail;
