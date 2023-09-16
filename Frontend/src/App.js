import "./App.css";
import BarChart from "./Components/BarChart";

import DoughtnutChart from "./Components/DoughtnutChart";
import { Navbar } from "./Components/Navbar";

import PolarAreaChart from "./Components/PolarAreaChart";
import RadarChart from "./Components/RadarChart";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BarChart/>  
    
     <PolarAreaChart/>
      <RadarChart/> 
     
     <DoughtnutChart/>
    </div>
  );
}

export default App;
