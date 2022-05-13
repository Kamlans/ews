import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter ,
  Routes,
  Route,
 
} from "react-router-dom";
import _Navbar from './Components/Utils/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import ComponentPage from './Components/Pages/ComponentPage';
import AD from '../src/Components/STC/AD/AD'
import ATC from '../src/Components/STC/ATC/ATC';
import CD from "../src/Components/STC/CD/CD";
import CTM from "../src/Components/STC/CTM/CTM";
import EVTM from "../src/Components/STC/EVTM/EVTM";
import PAC from "../src/Components/STC/PAC/PAC";
import TDMC from "../src/Components/STC/TDMC/TDMC";
import Error from './Components/Utils/Error/Error';
import OD from './Components/SH/OD';


function App() {
  return (
    <div className="App">
      {/* < AD /> */}
      <BrowserRouter>
        <_Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/od" element={<OD />} />
          <Route path="/ad" element={<AD />} />
          <Route path="/atc" element={<ATC />} />
          <Route path="/cd" element={<CD />} />
          <Route path="/ctm" element={<CTM />} />
          <Route path="/evtm" element={<EVTM />} />
          <Route path="/pac" element={<PAC />} />
          <Route path="/tdmc" element={<TDMC />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
