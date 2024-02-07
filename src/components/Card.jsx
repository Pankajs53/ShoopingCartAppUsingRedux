import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {add,remove} from "../redux/slices/CartSlice"

function Card({item}){
    const dispatch = useDispatch();
    const {cart}= useSelector( (state) => state)

    useEffect( () =>{
        console.log("Cart data is->",cart);
    },[cart])

    function handleAddCart(){
        console.log("Added to cart")
        dispatch(add(item))
    }

    function handleRemoveCart(){
        console.log("removed called")
        dispatch(remove(item.id))
    }

    
    return(
        <div className="bg-white p-8 m-2 shadow-xl w-[250px] gap-[10px] rounded transform transition-transform hover:scale-105">
             <div>
                {/* <p className="text-xl font-bold mb-4">{post.title.substring(0,20)}</p> */}
                <p className="text-xl font-bold mb-4 overflow-hidden whitespace-nowrap overflow-ellipsis">{item.title.substring(0, 20)}</p>
            </div>
            <div>
                <p className="text-gray-600 mb-4">{item.description.substring(0,40)}</p>
            </div>
            <div>
                {/* <img className="w-full h-auto mb-4" src={post.image}></img> */}
                <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover rounded mb-4" />
            </div>
            <div className="flex items-center justify-between">
                <div>
                <p className="text-lg font-semibold">{item.price}</p>
                </div>
                <div>
                    {
                        cart.some( (cartItem) => cartItem.id == item.id  )?
                        (<button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleRemoveCart}>Remove</button>):
                        (<button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleAddCart} >Add</button>) 

                    }
                </div>
                
            </div>
        </div>
    )
}

export default Card;