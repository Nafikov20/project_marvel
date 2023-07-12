import {Route, Routes, useLocation} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import {ComicsPage, MainPage, Page404, SingleComicPage} from "../pages";
import {useEffect} from "react";

export const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    },[pathname]);

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route element={<MainPage/>} path="/" />
                    <Route element={<ComicsPage/>} path="/comics"/>
                    <Route element={<SingleComicPage/>} path="/comics/:comicId"/>
                    <Route element={<Page404/>} path="*"/>
                </Routes>
            </main>
        </div>
    )
}

