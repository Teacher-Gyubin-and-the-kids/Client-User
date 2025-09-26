import Auth from '@/pages/Auth';
import Main from '@/pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth/>} />
      </Routes>
    </Router>
  );
}

export default App
