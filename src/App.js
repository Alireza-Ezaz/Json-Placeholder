import logo from './logo.svg';
import './App.css';
import UserList from "./UserList/userList";
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <UserList></UserList>
            </header>
        </div>
    );
}

export default App;
