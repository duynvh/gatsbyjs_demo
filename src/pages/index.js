import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h4`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Thoughts by DuyNVH</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`