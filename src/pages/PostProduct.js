import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PostProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sizes, setSizes] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            title,
            description,
            price,
            sizes: sizes.split(',').map(size => size.trim()),
            firebase_images: images.split(',').map(image => image.trim()),
        };

        try {
            const response = await fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                alert('Product posted successfully!');
            } else {
                alert('Failed to post product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="sizes">Sizes (comma-separated):</label>
                    <input
                        type="text"
                        id="sizes"
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="images">Images (comma-separated URLs):</label>
                    <input
                        type="text"
                        id="images"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Post Product</button>
            </form>
        </div>
    );
};

export default PostProduct;
