import { NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import styles from "./CustomNavItem.module.css"
import CustomIcon, {IconNames} from "../../../CustomIcon/CustomIcon"

interface Props{
    path: string, 
    name: string, 
    exact: boolean, 
    icon_name: IconNames
}



const CustomNavItem : React.FC<Props> = (props: Props)=> {
    return(
        <LinkContainer 
        activeClassName={styles.Custom_Nav_Item_Active} 
        to={props.path} 
        exact={props.exact}
        >
            <NavItem  className={styles.Custom_Nav_Item}>
                <span className={styles.Icon_spacing_left}> 
                    <CustomIcon  size={23} iconName={props.icon_name} />
                </span>   
                {props.name}
            </NavItem>
        </LinkContainer>
    )
}


export default CustomNavItem