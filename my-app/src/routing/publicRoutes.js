import {useSelector} from 'react-redux';
import { Navigate} from 'react-router-dom';

export default function PublicRoutes({children}) {
    const isAuthenticated  = useSelector((store) => store.auth.isAuthenticated);
    console.log("PublicRoutes isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
}