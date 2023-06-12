import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import CustomerList from './components/Dashboard/CustomerList';
import CustomerManage from './components/Dashboard/CustomerManage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/TrackExpress" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<CustomerList />} />
        <Route path="/add" element={<CustomerManage />} />
      </Routes>
    </Router>
  );
};

export default App;
