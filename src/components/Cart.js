import { useDispatch, useSelector } from "react-redux";
import MenuItemBox from "./MenuItemBox";
import { clearCart } from "../utils/reduxStore/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearItems = () => {
        const ans = confirm("Do you want to clear the cart?");
        if (ans) dispatch(clearCart());
    }
    // console.log(cartItems);
    return (
        <div className="mx-auto w-1/2">
            <h1 className="font-bold text-xl my-4 text-center">My Cart</h1>
            <button className="p-3 rounded-lg bg-black text-white shadow-xl border-blue-400" onClick={handleClearItems}>Clear All Items</button>
            {cartItems.length === 0 && <div className="text-center m-4 text-red-500">Your cart is Empty, Please Add some items!</div>}
            {
                cartItems.map((item) => {
                    {console.log("Helllo" , item)}
                    return (<MenuItemBox key={item.id} menuItem={item}/>)
                })
            }
        </div>
    )
}

export default Cart;