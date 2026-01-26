import { useSelector } from "react-redux";

const AddToCart = () => {
    const selector = useSelector((state) => state.cart.value)
    
    return (
        <div>
            <h2>{selector}</h2>
        </div>
    )
}

export default AddToCart;