import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import ContactForm from "../components/ContactForm";
import GithubLink from "../components/GithubLink";
import Layout from "../components/Layout";
import LinkedinLink from "../components/LinkedinLink";
import ProjectIcon from "../components/ProjectIcon";
import Seo from "../components/Seo";
import SkillsColumn from "../components/SkillsColumn";
import "../scss/index.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const GITHUB_PROFILE = "https://github.com/osamaadam";

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      indie: file(relativePath: { eq: "indiePhotographers.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      personalIcon: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      unixShellIcon: file(relativePath: { eq: "unix-shell/cowsay.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lyricsGeniusIcon: file(relativePath: { eq: "lyricsGenius/home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      AESChipionsIcon: file(relativePath: { eq: "AESChipions/github.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      todoNumeroUnoIcon: file(relativePath: { eq: "todoNumeroUno/home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cpuScheduleIcon: file(
        relativePath: { eq: "cpu-schedule/cpu-schedule.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      angularTodo: file(relativePath: { eq: "angular-todo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelector("#navbar-links");
    const length = navbarLinks?.children.length || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryId = entry.target.id;
          if (entry.isIntersecting) {
            for (let i = 0; i < length; i++) {
              // @ts-ignore
              if (navbarLinks?.children[i].dataset.nav === entryId)
                navbarLinks?.children[i].classList.add(
                  "navlinks__link--highlighted"
                );
              else if (
                navbarLinks?.children[i].classList.contains(
                  "navlinks__link--highlighted"
                )
              )
                navbarLinks?.children[i].classList.remove(
                  "navlinks__link--highlighted"
                );
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Seo title="Osama Adam" />
      <Layout>
        <div className="home-container">
          <section className="home-container__brief" id="home">
            <div className="home-profile-paper card">
              <div className="home-info-area">
                <OutboundLink
                  href={GITHUB_PROFILE}
                  title="Github profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img
                    fluid={data.profile.childImageSharp.fluid}
                    alt="Osama Adam"
                    className="profile-picture"
                  />
                </OutboundLink>
                <div className="home-info">
                  <h1>Osama Adam</h1>
                  <p>Web Developer</p>
                  <div className="social-links">
                    <GithubLink />
                    <LinkedinLink />
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
                  <li>
                    <h3>Familiarity with Progressive Web Apps (PWAs)</h3>
                    <p>
                      This one isn't though because it'd be an unnecessary
                      burden. An example project is in the showcase!
                    </p>
                  </li>
                  <li>
                    <h3>Experience with the MERN stack</h3>
                    <p>
                      MongoDB? Express? React? Node? I've got all bases covered.
                    </p>
                  </li>
                  <li>
                    <h3>Git magician</h3>
                    <p>99% guarantee of not ruining the git history.</p>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h1>Stack</h1>
                <ul className="stack">
                  <SkillsColumn
                    columnTitle="frontend"
                    highlighted={["React", "SCSS"]}
                    normal={["HTML"]}
                  />
                  <SkillsColumn
                    columnTitle="backend"
                    highlighted={["Node", "MongoDB"]}
                  />
                  <SkillsColumn
                    columnTitle="frameworks"
                    highlighted={["Express", "Gatsby", "Mongoose"]}
                    normal={["Bootstrap"]}
                  />
                  <SkillsColumn
                    columnTitle="tools"
                    highlighted={["Typescript", "Git", "NPM/Yarn"]}
                    normal={["Docker", "Heroku"]}
                  />
                  <SkillsColumn
                    columnTitle="additional languages"
                    highlighted={["C++", "C"]}
                    normal={["Python", "Java"]}
                  />
                </ul>
              </div>
            </div>
          </section>
          <section className="card projects" id="projects">
            <h1>Projects</h1>
            <ul className="projects__list">
              <ProjectIcon
                title="Indie Photographers"
                pathname="/projects/indie-photographers"
                icon={data.indie.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Personal Website"
                pathname="/projects/personal-website"
                icon={data.personalIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Angular Todo"
                pathname="/projects/angular-todo"
                icon={data.angularTodo.childImageSharp.fluid}
              />
              <ProjectIcon
                title="CPU Schedule"
                pathname="/projects/cpu-schedule"
                icon={data.cpuScheduleIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Unix Shell"
                pathname="/projects/unix-shell"
                icon={data.unixShellIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="Lyrics Genius"
                pathname="/projects/lyrics-genius"
                icon={data.lyricsGeniusIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="AESChipions"
                pathname="/projects/aes-chipions"
                icon={data.AESChipionsIcon.childImageSharp.fluid}
              />
              <ProjectIcon
                title="todoNumeroUno"
                pathname="/projects/todo-numero-uno"
                icon={data.todoNumeroUnoIcon.childImageSharp.fluid}
              />
            </ul>
          </section>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
};

export default Home;
