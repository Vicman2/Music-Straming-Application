import React from 'react'
import { Route } from 'react-router-dom'

interface Props{
    path: string, 
    component: React.FC
}

const SingleRoute :React.FC<Props> = (props: Props) => {
    return(
        <Route 
            path={props.path} 
            component={props.component}
        />
    )
}

export default SingleRoute