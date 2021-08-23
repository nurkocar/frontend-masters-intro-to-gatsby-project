import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function About() {
  return (
    <Layout
      title="About my site"
      description="More information about this site"
    >
      <h1>About my site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
