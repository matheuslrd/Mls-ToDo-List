import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Padrão</div>} />
        <Route path='/homepage' element={<div>HomePage</div>} />
      </Routes>
    </Router>
  );
}