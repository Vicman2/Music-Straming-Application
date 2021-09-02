import { IconNames } from "../../CustomIcon/CustomIcon"
import CustomNavItem from "./CustomNavItem/CustomNavItem"

type NavItemData = {
    path: string, 
    name: string, 
    exact: boolean, 
    icon_name: IconNames
}


const CustomNavItems:React.FC = () => {

    const NavItems: NavItemData[] =  [
        {
            path: "/home", 
            name: "Home", 
            exact: true, 
            icon_name: "IoHomeSharp"
        },
        {
            path: "/my-library", 
            name: "My Library", 
            exact: false, 
            icon_name: "IoLibrarySharp"
        },
        {
            path: "/liked-song", 
            name: "Liked Song", 
            exact: false, 
            icon_name: "IoMusicalNotesSharp"
        },
        {
            path: "/create-playlist", 
            name: "Create Playlist", 
            exact: false, 
            icon_name: "IoAddCircleSharp"
        },
        {
            path: "/settings", 
            name: "Settings", 
            exact: false, 
            icon_name: "IoSettingsSharp"
        }
    ]

    const toRender = NavItems.map(singleNav => {
        return(
            <CustomNavItem
            name={singleNav.name}
            path={singleNav.path} 
            exact={singleNav.exact}
            icon_name={singleNav.icon_name}
            />
        )
    })

    return <>
        {toRender}
    </>
}



export default CustomNavItems
