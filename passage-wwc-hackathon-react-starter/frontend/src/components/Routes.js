import * as React from "react";
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { ControllerTest } from "./ControllerTest";
import Header from "./Header";
import Home from "../views/Home";
import Profile from "../views/Profile";
import {Login} from "./Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header />}>
            <Route index element={ <Home /> } />
            <Route path="/lostandfound" element={ <ControllerTest /> } />
            <Route path="/adopt" element={ <ControllerTest /> } />
            <Route path="/shelter" element={ <Profile /> } />
            <Route path="/login" element={ <Login /> } />
        </Route>
        ));

export function RouteHelper(){
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};