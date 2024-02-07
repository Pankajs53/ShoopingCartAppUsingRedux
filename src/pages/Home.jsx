import { useEffect, useState } from "react";
import axios from 'axios'
import Card from "../components/Card";

function Home(){

    const[items,setItems]=useState([])
    const API_URL = "https://fakestoreapi.com/products";

    async function fetchData(){
        try{
            const response = await axios(API_URL);
            console.log(response.data)
            setItems(response.data);
        }catch(error){
            console.log("Error in api call",error.message);
        }
    }

    useEffect( () => {
        fetchData();
    },[]);

    return(
        <div className="bg-white-500 opacity-200 max-w-6xl mx-auto mt-20 p-4">
            {
                items.length<0?(
                    <div>No Items to Show</div>
                ):(
                    <div className="flex gap-4 flex-wrap">
                        {items.map( (item,index) => {
                            return <Card item={item} key={item.id}></Card>
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default Home;