import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./PageLayout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import { routes } from "../config/routes"
import Project from "../Pages/Project"
import Services from "../Pages/Service"
import Contact from "../Pages/Contact"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={routes.home} element={<Home/>} />*/}
                <Route element={<PageLayout/>}>
                    <Route path={routes.home} element={<Home/>} />
                    <Route path={routes.about} element={<About/>} /> 
                    <Route path={routes.project} element={<Project/>} />
                    <Route path={routes.service} element={<Services/>} />
                    <Route path={routes.contact} element={<Contact/>} />                     
                </Route>
            </Routes>
        </BrowserRouter>
    )
}