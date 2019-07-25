import React from "react"
import Circle from "./Circle"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query AudioFiles {
        allFile(filter: { ext: { eq: ".mp3" } }, sort: { fields: name }) {
          edges {
            node {
              publicURL
            }
          }
        }
        site {
          id
          siteMetadata {
            audioFiles {
              title
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <div className="audio-player">
          {data.site.siteMetadata.audioFiles.map((demo, index) => {
            return (
              <Circle
                key={demo.title}
                id="one"
                title={demo.title}
                link={data.allFile.edges[index].node.publicURL}
              />
            )
          })}
        </div>
      )
    }}
  />
)
