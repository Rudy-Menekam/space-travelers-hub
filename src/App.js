import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './components/missions';
import Rockets from './components/rockets';
import MyProfile from './components/my_profile';
import Header from './components/header';
import { getMission } from './reduxState/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="my_profile" element={<MyProfile />} />
        <Route path="missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
