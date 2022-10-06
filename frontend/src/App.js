import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Review } from "./pages/Review";
import { SiteHeader } from "./components/SiteHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
