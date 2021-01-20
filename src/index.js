import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//COMPONENTS
import App from './App';

// UTILS
import StoreProvider from './Utils/store';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>,
    rootElement
);
