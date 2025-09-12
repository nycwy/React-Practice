import { useState } from "react";

export default function MyComponent() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea placeholder="Enter your comment here!" value={comment} onChange={handleCommentChange} />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select the payment method</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input value="Pick Up" type="radio" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label><br></br>
            <label>
                <input value="Home Delivery" type="radio" checked={shipping === "Home Delivery"} onChange={handleShippingChange} />
                Home Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}