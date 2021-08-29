import { NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

interface Props{
    path: string, 
    name: string
}



const CustomNavItem : React.FC<Props> = (props: Props)=> {
    return(
        <LinkContainer to={props.path}>
            <NavItem>{props.name}</NavItem>
        </LinkContainer>
    )
}


export default CustomNavItem