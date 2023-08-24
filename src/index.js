import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
        </div>
    );
}

function Avatar() {
    return <img src="images/profile.jpg" className="avatar"></img>;
}

function Intro() {}

function SkillList() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
