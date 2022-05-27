import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "../page/Header";
import {GlobalStyles} from "./globalStyles";
import Footer from "../page/Footer";
import Reader from "../reader/Reader";
import Home from "../home/Home";
import Books from "../books/Books";
import Private from "../auth/Private";
import LoginPage from "../auth/LoginPage";
import Main from "../page/Main";
import SignupPage from "../auth/SignupPage";
import {useCheckUser} from "../../hooks/auth/useCheckUser";
import Vocabulary from "../vocabulary/Vocabulary";
import ReaderRecent from "../reader/ReaderRecent";

function App() {

    useCheckUser()

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Header/>
            <Main>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/signup"} element={<SignupPage/>}/>
                    <Route path={"/books"} element={<Private><Books/></Private>}/>
                    <Route path={"/reader"}>
                        <Route path={""} element={<Private><ReaderRecent/></Private>}/>
                        <Route path={":bookIdParam"} element={<Private><Reader/></Private>}/>
                        <Route path={":bookIdParam/:sectionId"} element={<Private><Reader/></Private>}/>
                    </Route>
                    <Route path={"/vocabulary"} element={<Private><Vocabulary/></Private>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </Main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
