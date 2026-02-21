import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./PageLayout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Project from "../Components/Project/Project"
import Services from "../Components/Services/Services"
import Contact from "../Components/Contact/Contact"
import { routes } from "../config/routes"

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