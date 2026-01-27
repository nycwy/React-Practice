import React from 'react';
import { Equal, Minus, Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, clearItem } from '../redux/slice';

const Product = () => {
    const dispatch = useDispatch();

    const product = {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    };

    return (
        <>
            <button
                onClick={() => dispatch(clearItem())}
                className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition m-4"
            >
                Clear Cart
            </button>
            <div className="max-w-xs p-4 m-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    <button
                        onClick={() => dispatch(addItem())}
                        className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        <Plus size={18} /> Add
                    </button>

                    <button
                        onClick={() => dispatch(removeItem())}
                        className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        <Minus size={18} /> Remove
                    </button>

                </div>
            </div>
        </>
    );
};

export default Product;