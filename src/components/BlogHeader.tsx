import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Tags from "./Tags";
import Img from "gatsby-image";
import "../scss/blog-header.scss";
import { BlogQueryNode } from "../types";
import { Link } from "gatsby";

interface Props {
  frontmatter: BlogQueryNode["frontmatter"];
}
const location = typeof window !== "undefined" && (window.location as Location);

const BlogHeader: React.FC<Props> = ({ frontmatter }) => {
  const url = frontmatter.title.trim().toLowerCase().replace(/\s/, "-");
  return (
    <>
      <Tags tags={frontmatter.tags} />
      <section className="blog__header">
        {location && location.pathname !== `/blog/${url}` ? (
          <Link to={`/blog/${url}`}>
            <h1>{frontmatter.title}</h1>
          </Link>
        ) : (
          <h1>{frontmatter.title}</h1>
        )}
        <div className="blog__details-container">
          <OutboundLink
            href={frontmatter.authorUrl || "#"}
            className="blog__author-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {frontmatter.authorImg?.childImageSharp && (
              <Img
                fluid={frontmatter.authorImg.childImageSharp.fluid}
                className="blog__author-avatar"
              />
            )}
            <i>{frontmatter.author}</i>
          </OutboundLink>
          <div className="blog__extra">
            <i className="blog__crumbs">{frontmatter.date}</i>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHeader;