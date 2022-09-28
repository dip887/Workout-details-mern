// browserrouter wraps everywhere we want to use router system
// Routes comopnent which wraps all of our individual routes
// individual route component to create a single route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
