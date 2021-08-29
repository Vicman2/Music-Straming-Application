import {Nav} from "react-bootstrap"
import CustomNavItems from "./CustomNavItems/CustomNavItems"

const CustomNav: React.FC = ()=>{
    return(
        <>
          <Nav defaultActiveKey="/home" className="flex-column">
            <CustomNavItems />
          </Nav>
        </>
    )
}


export default CustomNav