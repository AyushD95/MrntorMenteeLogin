import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from 'react-hot-toast';

import MenteeSignin from './pages/MenteeSignin';
import MenteeSignup from './pages/MenteeSignup';

import MentorSignin from './pages/MentorSignin';
import MentorSignup from './pages/MentorSignup';



import Welcome from './pages/Welcome';
import MenteeDashboard from './pages/MenteeDashboard';
import HomeMentee from './pages/HomeMentee';
import Homeentor from './pages/HomeMentor';
import MentorDashboard from './pages/MentorDashboard';





function App() {
  

  return(

    
  <div className="App">

    <Toaster
    position="top-right"
    reverseOrder={false}
    />

    <BrowserRouter>
      <Routes>
          
          <Route path='/mentee-signin' element={<MenteeSignin />} />
          <Route path="/mentee-signup" element={<MenteeSignup />} />


          <Route path='/mentor-signin' element={<MentorSignin />} />
          <Route path="/mentor-signup" element={<MentorSignup />} />

          <Route path="/mentee-dashboard" element={<MenteeDashboard/>} />
          <Route path="/mentor-dashboard" element={<MentorDashboard/>} />




          <Route path="/mentee-home" element={<HomeMentee/>} />

          <Route path="/mentor-home" element={<Homeentor/>} />

          <Route path="/" element={<Welcome />} />


      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
