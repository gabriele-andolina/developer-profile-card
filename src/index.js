import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
    {
        name: "HTML + CSS",
        level: "intermediate",
        backgroundColor: "#f06529",
    },
    {
        name: "JavaScript",
        level: "advanced",
        backgroundColor: "#f0DB4f",
    },
    {
        name: "Bootstrap",
        level: "beginner",
        backgroundColor: "#563d7c",
    },
    {
        name: "Python",
        level: "beginner",
        backgroundColor: "#306998",
    },
    {
        name: "Django",
        level: "intermediate",
        backgroundColor: "#092e20",
    },
    {
        name: "React",
        level: "advanced",
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

            <span>
                {skill.level === "beginner" && "👌🏻"}
                {skill.level === "intermediate" && "🤙🏻"}
                {skill.level === "advanced" && "🔥"}
            </span>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
