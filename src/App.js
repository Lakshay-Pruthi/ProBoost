import Dashboard from "./Pages/Dashboard/Dashboard";
import Chat from "./Pages/Chat/Chat";
import Project from "./Pages/Project/Project";
import SignUp from "./Pages/SignUp/SignUp";
import Tasks from "./Pages/Tasks/Tasks";
import Profile from "./Pages/Profile/Profile";

import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Tasks" element={<Tasks />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Chat" element={<Chat/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
