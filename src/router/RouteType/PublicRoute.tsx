import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }: {children: JSX.Element}) => {

    const logged = true;

    return (!logged)
        ? children
        : <Navigate to="/home" />
}

export default PublicRoute;