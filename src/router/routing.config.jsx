import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from '../pages/home/landing/home.page'
// import { Error404 } from "../pages/common/error.page";
import RegisterPage from "../pages/home/auth/register/register";
import ForgetPass from "../pages/home/auth/Forget-Pass/forgetPass";
import HomeHeader from "../components/Navbar";
import LoginPage from "../pages/home/auth/login";
import Books from "../pages/home/Books/book.home";
import AddBooks from "../pages/home/AddBooks/addBooks.home";
import ViewBooks from "../pages/home/ViewBooks/viewbooks.home";
import Footer from "../components/footer";


const Routing =()=>{
    
     return(
                 <>
        
       <BrowserRouter>
       <HomeHeader/>
       <Routes>
       
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forget-password" element={<ForgetPass/>}/>
           <Route path="/books" element={<Books/>}/>
          <Route path="/Addbooks" element={<AddBooks/>}/> 
          <Route path="/viewbooks" element={<ViewBooks/>}/> 

          
             {/* <Route path='*' element={<Error404/>}/> */}

          
       </Routes>
      
       </BrowserRouter>
       <Footer/>
            </>

     )
}

   export default Routing;