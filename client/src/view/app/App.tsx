import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../page/Header";
import {routes} from "../../utils/routes";
import {GlobalStyles} from "./globalStyles";
import Footer from "../page/Footer";

function App() {
    return (
        <BrowserRouter>
            <>
                <GlobalStyles/>
                <Header/>
                <Routes>
                    {routes.map(route =>
                        <Route path={route.path}
                               element={route.component}
                               key={route.path}
                        />
                    )}
                </Routes>
                <Footer/>
            </>
        </BrowserRouter>
    );
}

export default App;
