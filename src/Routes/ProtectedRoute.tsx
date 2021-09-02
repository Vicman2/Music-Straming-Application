
import {Route, Redirect} from 'react-router-dom'
import { Contants } from '../config/constants'
import { getInLocalStorage } from '../utils/utility' 

interface Props{
    component : React.FC
}




const ProtectedRoute:React.FC<Props> = ({
        component: Component, 
        ...rest
    }) => {
    return(
        <Route
        {...rest}
        render={(props1) => {
          const authenticated = getInLocalStorage(Contants.USER_TOKEN)
          if(authenticated) return <Component />
          return <Redirect to={{pathname: "/login", state:{from: props1.location }}} />
        }}
        />
    )
}


export default ProtectedRoute