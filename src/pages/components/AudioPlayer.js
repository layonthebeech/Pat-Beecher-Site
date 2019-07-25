import React from "react"
import Circle from "./Circle"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query AudioFiles {
        site {
          id
          siteMetadata {
            audioFiles {
              url
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
          {data.site.siteMetadata.audioFiles.map(demo => {
            return (
              <Circle
                key={demo.title}
                id="one"
                title={demo.title}
                link={demo.url}
              />
            )
          })}
        </div>
      )
    }}
  />
)
