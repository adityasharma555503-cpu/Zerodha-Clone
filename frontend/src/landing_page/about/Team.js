import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">Meet the Developer</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/images/Aditya Sharma.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Aditya Sharma</h4>
          <h6>Full-Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I'm a computer science student passionate about software development
            and building practical web applications.
          </p>
          <p>
            I developed this Zerodha-inspired trading platform as a full-stack
            project to strengthen my skills in frontend development, backend
            APIs, and database management. The project recreates key elements of
            a trading dashboard, including holdings, positions, and order
            management.
          </p>
          <p className="social-links">
            Connect with me:{" "}
            <a
              href="https://github.com/adityasharma555503-cpu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://www.linkedin.com/in/aditya-sharma555503/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
