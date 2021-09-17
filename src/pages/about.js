import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout.js';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function About({ data }) {
  return (
    <Layout
      title="About my site"
      description="More information about this site"
    >
      <GatsbyImage image={getImage(data.file)} alt="a cocktail" />
      <h1>About my site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
