import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/users/Shop';
import Cart from './components/users/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import Todayprice from './components/Todayprice';
import ProfileManagement from './components/users/ProfileManagement';
import VerifyEmail from './components/verifyEmail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import AddProduct from './components/Farmers/AddProduct';
function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/todayprice" element={<Todayprice/>}/>
              <Route path="/profile" element={<ProfileManagement/>}/>
              <Route path="/addproduct" element={<AddProduct/>}/>
              <Route path="/verify-email" element={<VerifyEmail/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}
export default App;