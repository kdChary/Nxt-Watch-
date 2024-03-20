import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
