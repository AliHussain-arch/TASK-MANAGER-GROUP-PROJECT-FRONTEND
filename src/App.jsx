import { useState } from "react";
import "./App.css";
// Importing the Authentication Components
import SignIn from "./components/Authentication/signIn/signIn";
import SignUp from "./components/Authentication/signUp/signUp";

// Importing the Project Components
import ProjectList from "./components/ProjectComponents/projectList/projectList";

// Importing the Task Components
import TaskList from "./components/TaskComponents/taskList/taskList";

// Importing the Semantic Components
import Footer from "./components/SemanticComponents/footer/footer";
import Navbar from "./components/SemanticComponents/navbar/navbar";

// Importing Router Components
import { Route, Routes } from "react-router-dom";
import authService from "./services/authService";

// Importing Homepage Components
import Home from "./components/Hompage/Homepage";

// Importing Help Componets
import Help from "./components/Help/help";

// Importing About Components
import About from "./components/About/about";

// Importing Contact Components
import Contact from "./components/Contact/contact";


function App() {
  const [user, setUser] = useState(authService.getUser());

  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {!user ? <Route path="/signin" element={<SignIn setUser={setUser}/>} /> : null}
        {!user ? <Route path="/signup" element={<SignUp/>} /> : null}
        {user ? <Route path={`/:userId/projects`} element={<ProjectList/>} /> : null}
        {user ? <Route path="/:userId/projects/:projectId/tasks" element={<TaskList />} /> : null}
        <Route path="/help" element={<Help/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;