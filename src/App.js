import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Travelight from './pages/Travelight';
import Dashboard from './pages/Dashboard';
import Favourite from './pages/Favourite';
import Message from './pages/Message';
import MyTickets from './pages/MyTickets';
import Settings from './pages/Settings';
import Transaction from './pages/Transaction';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact element={<Travelight />} path='/' />
          <Route exact element={<Dashboard />} path='/dashboard' />
          <Route exact element={<Favourite />} path='/favourite' />
          <Route exact element={<Message />} path='/messages' />
          <Route exact element={<MyTickets />} path='/myTickets' />
          <Route exact element={<Settings />} path='/settings' />
          <Route exact element={<Transaction />} path='/transaction' />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
