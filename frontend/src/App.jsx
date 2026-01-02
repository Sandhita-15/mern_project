import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import HOME from "./Pages/Home";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<HOME/>}/>
      <Route path="/Success" element={<Success/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Toaster/>
  </Router>
}

export default App
