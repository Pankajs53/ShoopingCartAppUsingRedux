import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.success("Item removed");
  }

 

  return (
    <div className="flex border-b-2 border-gray-200 py-4 items-center">
      
      <div className="flex-shrink-0 w-20 h-20">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-500">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-700">${item.price}</p>
          <button onClick={removeFromCart} className="text-red-500 hover:text-red-600 focus:outline-none">
            <MdOutlineDeleteForever className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default CartItem;
