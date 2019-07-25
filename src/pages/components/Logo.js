import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allImageSharp(filter: {}) {
          edges {
            node {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      return data.allImageSharp.edges.map((image, index) => {
        return (
          <div key={index} className="logo">
            <Img fluid={image.node.fluid} />
          </div>
        )
      })
    }}
  />
)
