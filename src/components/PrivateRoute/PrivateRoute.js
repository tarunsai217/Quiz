import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRoute = () => {
    const {user}=useSelector(state=>state.state)
    
    return user.uid? <Outlet/> : <Navigate to='/signIn' />
  }
  
  export default PrivateRoute