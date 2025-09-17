import AdminMain from '@/pages/Admin/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminMain />} />
      </Routes>
    </Router>
  )
}

export default App
