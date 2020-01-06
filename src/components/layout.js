import "./style/global.css";
import "./style/strucutres.css";
import "./style/fontawesome.css";

import favicon16 from "../img/favicon/favicon16.png";
import favicon32 from "../img/favicon/favicon32.png";
import favicon48 from "../img/favicon/favicon48.png";

import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import {
  Main,
  Aside,
  Logo,
  Navigator,
  LinksList,
  SocialList
} from "./style/emo-layout.js";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            {
              name: "keywords",
              content: data.site.siteMetadata.keywords
            }
          ]}
          link={[
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: `${favicon16}`
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: `${favicon32}`
            },
            { rel: "shortcut icon", type: "image/png", href: `${favicon48}` }
          ]}
        />
        <Aside>
          <Navigator>
            <Logo>
              <h5>
                {data.site.siteMetadata.title}{" "}
                <SocialList>
                  <span>
                    <a target="_blank" href="https://twitter.com/farhanazam98">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </span>{" "}
                  <span>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/fez1234/"
                    >
                      <span className="fab fa-instagram"></span>
                    </a>
                  </span>{" "}
                  <span>
                    <a target="_blank" href="https://github.com/farhanazam98">
                      <span className="fab fa-github"></span>
                    </a>
                  </span>
                </SocialList>
              </h5>
              <p>{data.site.siteMetadata.description}</p>
            </Logo>
            <nav>
              <LinksList>
                <li>
                  <Link to={`/about-me/`} activeClassName="active">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to={`/`} activeClassName="active">
                    Projects
                  </Link>
                </li>
              </LinksList>
            </nav>
          </Navigator>
        </Aside>
        <Main>{children}</Main>
      </React.Fragment>
    )}
  />
);

export default Layout;
