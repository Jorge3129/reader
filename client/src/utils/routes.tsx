import Home from "../views/home/Home";
import Reader from "../views/reader/Reader";
import Books from "../views/books/Books";

export const routes = [
    {title: "Home", path: '/', component: <Home/>},
    {title: "Books", path: '/books', component: <Books/>},
    {title: "Reader", path: '/reader', component: <Reader/>},
]