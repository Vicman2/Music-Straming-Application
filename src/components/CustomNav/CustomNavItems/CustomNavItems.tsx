import CustomNavItem from "./CustomNavItem/CustomNavItem"


const CustomNavItems:React.FC = () => {

    const NavItems = [
        {
            path: "/home", 
            name: "Name"
        },
        {
            path: "/my-library", 
            name: "My Library"
        },
        {
            path: "/liked-song", 
            name: "Liked Song"
        },
        {
            path: "/create-playlist", 
            name: "Create Playlist"
        },
        {
            path: "/settings", 
            name: "Settings"
        }
    ]

    const toRender = NavItems.map(singleNav => {
        return(
            <CustomNavItem
            name={singleNav.name}
            path={singleNav.path} 
            />
        )
    })

    return <>
        {toRender}
    </>
}



export default CustomNavItems
