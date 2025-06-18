import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({children}) {
    const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
    console.log("ProtectedRoutes isAuthenticated:", isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}