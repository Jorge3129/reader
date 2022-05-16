import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "../page/Header";
import {GlobalStyles} from "./globalStyles";
import Footer from "../page/Footer";
import Reader from "../reader/Reader";
import Home from "../home/Home";
import Books from "../books/Books";
import Private from "../auth/Private";
import AuthPage from "../auth/AuthPage";
import Main from "../page/Main";

function App() {

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Header/>
            <Main>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={"/login"} element={<AuthPage/>}/>
                    <Route path={"/books"} element={<Private><Books/></Private>}/>
                    <Route path={"/reader"}>
                        <Route path={""} element={<Private><Reader/></Private>}/>
                        <Route path={":bookIdParam"} element={<Reader/>}/>
                        <Route path={":bookIdParam/:sectionId"} element={<Reader/>}/>
                    </Route>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </Main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
