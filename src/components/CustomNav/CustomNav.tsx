import {Nav} from "react-bootstrap"
import CustomNavItems from "./CustomNavItems/CustomNavItems"
import styles from "./CustomNav.module.css"

const CustomNav: React.FC = ()=>{
    return(
        <>
          <Nav defaultActiveKey="/home" className={`flex-column ${styles.Custom_Nav}`}>
            <CustomNavItems />
          </Nav>
        </>
    )
}


export default CustomNav