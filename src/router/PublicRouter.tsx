import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthScreen from '../pages/AuthScreen';
import { PublicRoute, PrivateRoute } from './RouteType';
import PrivateContainer from '../containers/PrivateContainer';

const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>          
        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<AuthScreen />} />
            </Routes>
          </PublicRoute>
          }
        />
        <Route path="/*" element={
          <PrivateRoute>
            <PrivateContainer />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter;