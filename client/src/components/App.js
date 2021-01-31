import React from 'react';
import './App.scss';

import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
