import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 800)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      return <GatsbyImage alt={alt} image={image.node.childImageSharp.gatsbyImageData} />;
    }}
  />
);
// return <StaticImage src={filename} layout="constrained" alt={alt} />;
// };

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
