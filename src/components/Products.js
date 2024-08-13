import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products: {error.message}</p>;

    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.product_id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: €{parseFloat(product.price).toFixed(2)}</p>
                        <p>Sizes: {product.sizes}</p>
                        <div>
                            {product.firebase_images && product.firebase_images.length > 0 ? (
                                product.firebase_images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Product image ${index + 1}`}
                                        style={{ width: '100px', height: 'auto', marginRight: '10px' }}
                                    />
                                ))
                            ) : (
                                <p>No images available</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
