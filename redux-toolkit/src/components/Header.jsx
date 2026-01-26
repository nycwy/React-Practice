import React from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from 'react-redux';

const Header = () => {
    const totalItems = useSelector((state) => state.cart.value);

    return (
        <header className="bg-slate-900 text-white p-4 shadow-md sticky top-0">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">REDUX<span className="text-blue-400">STORE</span></h1>

                <div className="relative p-2">
                    <ShoppingCart size={24} />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-900">
                            {totalItems}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;