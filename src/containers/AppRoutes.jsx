import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./PageLayout"
import { navLink } from "../config/Route"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Project from "../Components/Project/Project"
import Services from "../Components/Services/Services"
import Contact from "../Components/Contact/Contact"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={navLink.home} element={<Home/>} />*/}
                <Route element={<PageLayout/>}>
                    <Route path={navLink.home} element={<Home/>} />
                    <Route path={navLink.about} element={<About/>} /> 
                    <Route path={navLink.project} element={<Project/>} />
                    <Route path={navLink.service} element={<Services/>} />
                    <Route path={navLink.contact} element={<Contact/>} />                     
                </Route>
            </Routes>
        </BrowserRouter>
    )
}