import React, { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";


const navigation = () => {
    let activeStyle = {textDecoration: "underline"};

    return (
        <Fragment>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>
                                New Post
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    )
}

export default navigation;