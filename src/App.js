import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter ,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import _Navbar from './Components/Utils/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import ComponentPage from './Components/Pages/ComponentPage';
import AD from '../src/Components/STC/AD/AD'


function App() {
  return (
    <div className="App">
      <ComponentPage />

      <BrowserRouter>
        {/* <_Navbar/> */}
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
