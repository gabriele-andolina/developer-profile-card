import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
    {
        name: "HTML + CSS",
        level: "🤙🏻",
        backgroundColor: "#f06529",
    },
    {
        name: "JavaScript",
        level: "🔥",
        backgroundColor: "#f0DB4f",
    },
    {
        name: "Bootstrap",
        level: "👌🏻",
        backgroundColor: "#563d7c",
    },
    {
        name: "Python",
        level: "👌🏻",
        backgroundColor: "#306998",
    },
    {
        name: "Django",
        level: "🤙🏻",
        backgroundColor: "#092e20",
    },
    {
        name: "React",
        level: "🔥",
        backgroundColor: "#61DBfb",
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
    return (
        <img
            src="images/profile.jpg"
            alt="Gabriele Andolina"
            className="avatar"
        ></img>
    );
}

function Intro() {
    return (
        <div>
            <h1>Gabriele Andolina</h1>
            <p>
                I'm a passionate junior web developer with knowledge of HTML,
                CSS, JavaScript, Python and Django. Currently studying React and
                planning two custom projects with the Django REST framework.
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    skill={skill}
                    key={skill.name}
                    // name={skill.name}
                    // level={skill.level}
                    // backgroundColor={skill.backgroundColor}
                />
            ))}
        </div>
    );
}

function Skill({ skill }) {
    return (
        <div
            className="skill"
            style={{ backgroundColor: skill.backgroundColor }}
        >
            <span>{skill.name}</span>
            <span>{skill.level}</span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
