import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RocketDetail from './pages/RocketDetail';
import SharedLayout from './components/SharedLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="rocket/:id" element={<RocketDetail />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
