import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { reset } from "../redux/slices/CartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const [totalMoney, setTotalMoney] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        const total = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        setTotalMoney(total);
    }, [cartItems]);

    function resetCart() {
        dispatch(reset());
        toast.success("Cart reset");
    }

    return (
        <div className='flex flex-row'>
            <div className='w-1/2 flex flex-col gap-4 p-4'>
                <h1 className="text-2xl font-semibold">Your Cart</h1>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item, index) => (
                            <CartItem key={item.id} item={item} itemIndex={index} />
                        ))}
                        <div className="flex items-center">
                            <button onClick={resetCart} className="text-red-500 hover:text-red-600 focus:outline-none">
                                Reset Your Cart
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500 mb-4">Nothing to show. Please add some products to your cart.</p>
                        <Link to={"/"}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
                                Click Here to Add Some Products
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            <div className='w-1/2 p-4'>
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">Summary</h2>
                    <p className="mb-2">Total Items: {cartItems.length}</p>
                    <p className="mb-4">Total Amount: ${totalMoney.toFixed(2)}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
                        Check Out Now
                    </button>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default Cart;
