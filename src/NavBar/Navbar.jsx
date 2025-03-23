import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function NavBar() {
  const navigation = useNavigate();
  
  const Login = () =>{
    navigation('/', {replace:true})
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item m-3">
              <Link className="nav-link" to="/inventory">
                Inventory
              </Link>
            </li>
            <li className="nav-item m-3">
            <Link className="nav-link" to="/employees">
                Employees
              </Link>
            </li>
          </ul>
          <button className="btn" id="logout"  onClick={Login}>Logout <i className="fa-solid fa-right-from-bracket"></i> </button>
        </div>
      </nav>
    </>
  );
}
