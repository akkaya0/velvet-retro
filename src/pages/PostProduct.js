import React, { useState } from 'react';

const PostProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sizes, setSizes] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            description,
            price,
            sizes: sizes.split(','),
            images: images.split(',')
        });
    };

    return (
        <div>
            <h1>Post a New Product</h1>
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
