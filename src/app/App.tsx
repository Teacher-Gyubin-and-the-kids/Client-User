import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '@/pages/Auth/SignUp/SignUp';
import SignIn from '@/pages/Auth/SignIn/SignIn';
import Home from '@/pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
