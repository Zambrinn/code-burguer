import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Users from "./Pages/Users"

function Routers() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="users" Component={Users}/>
            </Routes>
        </Router>
    )
}

export default Routers