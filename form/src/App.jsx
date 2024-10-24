import React from "react";
import Portal from "./Portal";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  );
};

export default App;
