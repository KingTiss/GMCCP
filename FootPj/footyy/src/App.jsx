import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return <>
  <BrowserRouter>
  <Routes>
  <Route Component={Home}/>





  </Routes>
  
  
  </BrowserRouter>
  </>;
}

export default App;
