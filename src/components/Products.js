import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Check the structure of the data
                const formattedProducts = data.map(product => ({
                    ...product,
                    sizes: parseSizes(product.sizes),
                    firebase_images: product.firebase_images || []
                }));
                setProducts(formattedProducts);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // Utility function to parse the sizes string
    const parseSizes = (sizesString) => {
        try {
            // Clean up the string to make it valid JSON
            const cleanedString = sizesString.replace(/'/g, '"').replace(/[\{\}]/g, '').split(',').map(s => s.trim());
            return cleanedString;
        } catch (e) {
            console.error('Error parsing sizes:', e);
            return [];
        }
    };

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
                        <p>Sizes: {Array.isArray(product.sizes) ? product.sizes.join(', ') : 'No sizes available'}</p>
                        <p>Seller: {product.shop_name}</p>
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
