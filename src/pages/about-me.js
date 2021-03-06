import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { MainPost, Title, ImageContainer } from "../components/style/emo-post";
import downloadFile from "../../static/FarhanAzamResume.pdf";

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
          <h4>I am a Software Engineer at Facebook.</h4>
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
            , which allows creators to upload their own VR content. I also
            worked at{" "}
            <a href="https://vhil.stanford.edu/">
              Virtual Human Computer Interaction Lab
            </a>
            , creating VR experiences to learn about the effects of VR on
            people. In the future, I hope to work on Computer Vision, one of the
            technologies at the forefront of VR.
          </p>
          <p>
            Feel free to take a look at my <a href={downloadFile}>resume</a>.
          </p>
        </div>
      </MainPost>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "img/about/wow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 650) {
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
