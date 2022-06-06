import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/app';
import {Provider} from "react-redux";
import {store} from "./domain/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Provider store={store}>
            <App/>
        </Provider>
    </>
);
