import { Outlet, NavLink } from "react-router-dom"

export default function Layout() {


    return (
        <>

        <div className="page-wrapper">
            <div className="header">
                <ul className="nav-links">
                    <NavLink to={'/'}>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <li>
                            About
                        </li>
                    </NavLink>
                    <NavLink to={'/counter'}>
                        <li>
                            Counter
                        </li>
                    </NavLink>
                  
                </ul>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
        
        
        </>
    )

}