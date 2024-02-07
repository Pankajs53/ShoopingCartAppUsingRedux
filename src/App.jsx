import Home from "./pages/Home"
import Cart from "./pages/Cart"
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import NavBar from "./components/NavBar"

const App = () => {
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
