import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/Index";
import { LandingPage } from "./pages/LadingPage/Index";
import { RouterLayout } from "./common/RouterLayout";
import { BookingsPage } from "./pages/Bookings/Index";


export const AppRouter: React.FC<{}> = () =>{
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/Landing" element={<LandingPage />}/>
                <Route path="/Bookings" element={<BookingsPage />}/>
            </Route>
            <Route path="/Login" element={<LoginPage />}/>
        </Routes>
    )
}