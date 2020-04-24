import React from "react";
import "../scss/index.scss";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/Seo";
import Showcase from "../components/Showcase";

const github = require("../assets/github.png");
const linkedin = require("../assets/linkedin.png");

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      indie: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Osama Adam" />
      <Layout>
        <div className="home-container">
          <div className="home-profile-paper card">
            <div className="home-info-area">
              <Img
                fluid={data.profile.childImageSharp.fluid}
                alt="Osama Adam"
                className="profile-picture"
              />
              <div className="home-info">
                <h1>Osama Adam</h1>
                <p>Software Developer</p>
                <div className="social-links">
                  <a
                    href="https://github.com/OsamaAdam98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      alt="GitHub Profile"
                      title="GitHub Profile"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/osamaadam98/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="Linkedin Profile"
                      title="Linkedin Profile"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="home-bio">
              <p>
                I'm an Electronics and Communication Engineering student.
                Currently going through my junior year. I like to create so
                naturally I started learning web development and this is where
                we are right now.
                <br />
                Throughout this page, I'll be showcasing my most significant
                projects and accomplishments. I mostly work with React, Node,
                C++, and their derivatives.
              </p>
            </div>
          </div>
          <div className="brief">
            <div className="card">
              <h1>Skills</h1>
              <ul className="brief__list">
                <li>Familiarity with Progressive Web Apps (PWAs)</li>
                <p>
                  This one isn't though because it'd be an unnecessary burden.
                  An example project is in the showcase!
                </p>
                <li>Experience with the MERN stack</li>
                <p>
                  MongoDB? Express? React? Node? I've got all bases covered.
                </p>
                <li>Git magician</li>
                <p>99% guarantee of not ruining the git history.</p>
              </ul>
            </div>
            <div className="card">
              <h1>Stack</h1>
              <ul className="stack">
                <li className="stack__li">
                  <h4>frontend</h4>
                  <ul>
                    <li>
                      <span className="highlight">Typescript</span>
                    </li>
                    <li>
                      <span className="highlight">SCSS</span>
                    </li>
                    <li>HTML</li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>backend</h4>
                  <ul>
                    <li>
                      <span className="highlight">Node</span>
                    </li>
                    <li>
                      <span className="highlight">MongoDB</span>
                    </li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>tech</h4>
                  <ul>
                    <li>
                      <span className="highlight">React</span>
                    </li>
                    <li>
                      <span className="highlight">Express</span>
                    </li>
                    <li>Mongoose</li>
                    <li>Bootstrap</li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>tools</h4>
                  <ul>
                    <li>
                      <span className="highlight">Git</span>
                    </li>
                    <li>
                      <span className="highlight">VSCode</span>
                    </li>
                    <li>
                      <span className="highlight">NPM/Yarn</span>
                    </li>
                    <li>Heroku</li>
                  </ul>
                </li>
                <li className="stack__li">
                  <h4>additional languages</h4>
                  <ul>
                    <li>
                      <span className="highlight">C++</span>
                    </li>
                    <li>
                      <span className="highlight">C</span>
                    </li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <Showcase
            title="Indie Photographers"
            url="https://indieapp.herokuapp.com"
            repository="https://github.com/osamaadam98/indie-photographers"
            icon={data.indie.childImageSharp.fluid}
            description={`
                Indie Photographers is a hub for well, indie photographers. The
                app is a PWA created through create-react-app. The frontend is a
                React app with Material-UI on top. The backend is mostly a node
                RESTful API with Express on top and MongoDB for a database.
                It's important to mention that this is a concept app not an
                actual commercial product. Nevertheless, this is a perfect
                showcase and reflection of my skills at this point in my career.
            `}
          />
          <div className="two-column-projects">
            <Showcase
              className="two-column-projects__project"
              title="Personal Website"
              url="https://www.osamaadam.tech"
              repository="https://github.com/osamaadam98/personal-website"
              description={`
                  This is the Website you're currently on. It was created using
                  Gatsby and is purely a static website. You may think the
                  design is minimal because I got lazy and I'm not a great web
                  designer. And you'd be partially correct. But, I got better
                  reasoning behind the minimal design. The website is built with
                  speed and performance in mind. The project is stylized purely using
                  SCSS. No external UI libraries were used.
              `}
            />
            <Showcase
              className="two-column-projects__project"
              title="Unix Shell"
              url="https://github.com/osamaadam98/unix-shell"
              repository="http://github.com/osamaadam98/unix-shell"
              description={`
                  This is a simple Unix shell written in C++. C++ is the
                  language I mainly use for problem solving, simply because it's
                  very easy to build a performant solution using it. It's also
                  however very easy to miss up if not careful. You may check the
                  project repository by clicking the project title.
              `}
            />
          </div>
          <div className="two-column-projects">
            <Showcase
              className="two-column-projects__project"
              title="Lyrics Genius"
              url="https://lyricsgenius.herokuapp.com/"
              repository="https://github.com/OsamaAdam98/LyricsGenius"
              description={`
                Lyrics Genius is tiny little app built using Musixmatch's free developer
                APIs. I built this in a day back when I started learning web development.
                It's built using React and Bootstrap.
              `}
            />
            <Showcase
              className="two-column-projects__project"
              title="AESChipions"
              url="https://github.com/mohamednour98/AESchipions"
              repository="https://github.com/mohamednour98/AESchipions"
              description={`
                AESChipions is a team effort between myself and Mohamed Nour. It was the
                final project of Chipions; which is a student program for digital design
                engineering. The project is basically an AES encryption system (counter mode)
                written entirely in Verilog.
              `}
            />
            <Showcase
              className="two-column-projects__project"
              title="todoNumeroUno"
              url="https://github.com/OsamaAdam98/todoNumeroUno"
              repository="https://github.com/OsamaAdam98/todoNumeroUno"
              description={`
                The magnum opus, the chef d'oeuvre, the masterpiece, my first ever todo list.
                Sadly this one isn't hosted. If only the world knew what I was withholding!
                So yeah, nothing special about this one, it's a todolist built in React with
                the worst backend known to mankind using Node and Mongodb.
              `}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
