import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getProfile } from '../redux/action'

const Profile = () => {
    const { users,isAuth} = useSelector(state=>state.reducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile)

    
      } , []);
   
    
  return (
    <div>
        {
            !isAuth ? <Navigate to="/SignIn"></Navigate>
            :
       <div>
       <h3>hello {users.name}</h3>
       </div> 
    }
    </div>
  )
}

export default Profile