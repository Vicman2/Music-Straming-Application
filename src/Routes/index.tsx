import { Switch } from "react-router"
import Home from "../containers/Home/Home"
import Library from "../containers/Library/Library"
import LikedSongs from "../containers/LikedSongs/LikedSongs"
import PlayList from "../containers/PlayList/PlayList"
import Settings from "../containers/Settings/Settings"
import SingleRoute from "./SingleRoute"




const MainRoutes: React.FC = ()=> {
    const allRoutes = [
        {
            path: "/home", 
            component: Home,
            protected: false
        },
        {
            path: "/my-library",
            component: Library,
            protected: false
        },
        {
            path: "/liked-song", 
            component: LikedSongs,
            protected: false
        },
        {
            path: "/create-playlist", 
            component: PlayList,
            protected: false
        },

        {
            path: "/settings",
            component: Settings,
            protected: false
        }
    ]


    const allNavRoutes = allRoutes.map(route => {
        // let RouteToRender = route.protected ? ProtectedRoute : SingleRoute
        let RouteToRender = SingleRoute
        return(
            <RouteToRender
            key={route.path}
            path={route.path}
            component={route.component}
            />
        )
    })
    return(
        <Switch>
            {allNavRoutes}
        </Switch>
    )
}


export default MainRoutes