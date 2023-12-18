import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useContext } from "react";
import { DataContext } from "./ContextApi/DataContext";



const Navbar = () => {

  const {loginWithPopup, isAuthenticated , user ,isLoading } = useAuth0();

  console.log(user)
  const {loginUser,setLoginUser}=useContext(DataContext)
  if (isLoading) {
    return <div>Loading...</div>;
  }
 

  
  
  



  return (
    <>
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={"/"}>Home</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"/"}>Home</Link></li>
     <li><Link to={"/product"}>Product</Link></li>
     <li><Link to={"/contact"}>Contact</Link></li>
  
    </ul>
  </div>
  <div className="navbar-end">
    <a  onClick={() => loginWithPopup()} className="btn">Login</a>
    <a className="btn border border-l border-solid">Signup</a>
  </div>
</div>
    </>
  )
}

export default Navbar