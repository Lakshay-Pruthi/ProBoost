import Dashboard from "./Pages/Dashboard/Dashboard";
import Chat from "./Pages/Chat/Chat";
import Project from "./Pages/Project/Project";
import SignUp from "./Pages/SignUp/SignUp";
import Tasks from "./Pages/Tasks/Tasks";
import Profile from "./Pages/Profile/Profile";

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Project" element={<Project />}></Route>
      <Route path="/Tasks" element={<Tasks />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/Chat" element={<Chat/>}></Route>
    </Routes>
  );
}

export default App;
