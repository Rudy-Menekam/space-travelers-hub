import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/header';
import MyProfile from './components/my_profile';
import Missions from './components/missions';
import Rockets from './components/rockets';

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="my_profile" element={<MyProfile />} />
        <Route path="missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
