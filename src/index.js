import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
    {
        name: "HTML + CSS",
        level: "🤙🏻",
    },
    {
        name: "JavaScript",
        level: "🔥",
    },
    {
        name: "Bootstrap",
        level: "👌🏻",
    },
    {
        name: "Python",
        level: "👌🏻",
    },
    {
        name: "Django",
        level: "🤙🏻",
    },
    {
        name: "React",
        level: "🔥",
    },
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img src="images/profile.jpg" className="avatar"></img>;
}

function Intro() {
    return (
        <p>
            I'm a passionate junior web developer with knowledge of HTML, CSS,
            JavaScript, Python and Django. Currently studying React and planning
            two custom projects with the Django REST framework.
        </p>
    );
}

function SkillList() {
    return (
        <div>
            <Skill name={skills[0].name} level={skills[0].level} />
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill">
            <p>{props.name}</p>
            <span>{props.level}</span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
