//Imports
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
