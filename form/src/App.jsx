import React from "react";
import Portal from "./Portal";
import Payment from "./Payment";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portal" element={<Portal />} />
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </Router>
  );
};

export default App;
