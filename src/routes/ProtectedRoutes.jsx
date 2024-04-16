import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
const ProtectedRoutes = ({children}) => {
    const {user} = useAuth();
    const location = useLocation()
    if(!user){
        return <Navigate to='/login' state={location?.pathname || 
        '/'}/>
    }
    return (
       <main>
        {children}
       </main>
    );
};
ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ProtectedRoutes;