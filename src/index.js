import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div className="card">
            <Avatar />
        </div>
    );
}

function Avatar() {
    return <img src="images/profile.jpg"></img>;
}

function Intro() {}

function SkillList() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
