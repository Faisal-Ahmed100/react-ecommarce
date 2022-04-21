import { Navigate } from 'react-router-dom';
import { UserUseAuth } from '../../context/contextApi';

const ProtectedRoute = ({children}) => {
    let {user}=UserUseAuth();
    if(!user){
    return <Navigate to='/login'/>
    }

  return children;
}

export default ProtectedRoute