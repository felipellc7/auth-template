import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardScreen from '../pages/DashboardScreen';
import NotFoundScreen from '../pages/NotFoundScreen';

const PrivateRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<DashboardScreen />} />
      <Route path="404" element={<NotFoundScreen />} />
      <Route
        path="*"
        element={<Navigate to="/404" replace />}
      />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default PrivateRouter;