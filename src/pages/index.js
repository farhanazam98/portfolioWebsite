import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import {
  SinglePost,
  PostInfo,
  Title,
  Video,
  Excrept,
  Card,
  CardColumns,
  Hyperlink,
} from "../components/style/emo-home-posts";
import Space from "../img/post/fazam_maina.jpg"

export default ({ data }) => {
  return (
    <Layout>
      <CardColumns>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}>
            <SinglePost>
              {node.frontmatter.containsImage && (
                <img src={Space} alt="Space scene" />
              )}
              <PostInfo>
                <Video>
                  {node.frontmatter.containsVideo && (
                    <iframe
                      src={node.frontmatter.videoURL}
                      title="Space Cadets"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />
                  )}
                </Video>
                <Title>{node.frontmatter.title}</Title>
                <Excrept>{node.frontmatter.description}</Excrept>
                {node.frontmatter.containsHyperlink && (
                  <Hyperlink>
                    <a href={node.frontmatter.hyperlinkURL}>
                      {node.frontmatter.hyperlinkDescription}
                    </a>
                  </Hyperlink>
                )}
                {node.frontmatter.containsDownload && (
                  <Hyperlink>
                    <a href={node.frontmatter.downloadPath}>
                      {node.frontmatter.downloadDescription}
                    </a>
                  </Hyperlink>
                )}
              </PostInfo>
            </SinglePost>
          </Card>
        ))}
      </CardColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { category: { ne: "2ndcat" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            update(formatString: "DD MMMM, YYYY")
            title
            subtitle
            videoURL
            description
            containsVideo
            containsImage
            containsHyperlink
            containsDownload
            hyperlinkURL
            hyperlinkDescription
            downloadDescription
            downloadPath
            featuredImage {
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
        }
      }
    }
  }
`;
