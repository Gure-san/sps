import React from 'react';
import Login from '../views/Login';
import Home from '../views/Home';
import User from '../views/User';
import { Route, Routes } from 'react-router-dom';
import { AttendanceForm } from '../views/AttendanceForm';
import AttendanceHistory from '../views/AttendanceHistory';

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<Home />}>
          <Route index path="/presensi" element={<AttendanceForm/>}/>
          <Route path="/riwayat" element={<AttendanceHistory/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </React.Fragment>
  );
}
