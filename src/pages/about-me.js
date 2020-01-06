import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { MainPost, Title, ImageContainer } from "../components/style/emo-post";

export default ({ data }) => {
  return (
    <Layout>
      <MainPost>
        <header>
          <Title>About Me</Title>
          <ImageContainer>
            <Img fluid={data.file.childImageSharp.fluid} alt="farhan smiling" />
          </ImageContainer>
        </header>
        <div className={"content"}>
          <h4>I am a senior at Stanford studying Computer Science</h4>
          <p>
            During my junior year, I began exploring subfields within Computer
            Science. I enjoyed the Computer Graphics classes I took, and I
            discovered Virtual Reality as it relates to Computer Graphics. I
            decided that I wanted to learn as much about VR as possible. Since
            then, I have taken three classes about Virtual Reality. I worked
            with <a href="https://www.praxislabs.co/">Praxis Labs</a>, a startup
            that is rethinking corporate diversity training with VR. At
            Facebook, I worked on &nbsp;
            <a href="https://creator.oculus.com/media-studio/documentation/media-studio/">
              Oculus Media Studio
            </a>
            , which allows creators to upload their own VR content. Currently, I
            work at{" "}
            <a href="https://vhil.stanford.edu/">
              Virtual Human Computer Interaction Lab
            </a>
            , creating VR experiences to learn about the effects of VR on
            people. In the future, I work on Computer Vision, one of the
            technologies at the forefront of VR.
          </p>
        </div>
      </MainPost>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "img/about/headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;
