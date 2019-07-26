import React, { useState, useEffect } from "react"
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
      const [id, setId] = useState(0)
      useEffect(() => {
        const Plyr = require("plyr")
        if (typeof window !== "undefined") {
          const players = Array.from(
            document.querySelectorAll(".js-player")
          ).map(p =>
            new Plyr(p, { autoPause: true }).on("play", e => {
              Array.from(document.querySelectorAll(".js-player")).map(p => {
                if (p.plyr.id !== e.detail.plyr.id) {
                  p.pause()
                }
              })
              setId(e.detail.plyr.id)
            })
          )
        }
      }, [])
      return (
        <div className="audio-player">
          {data.site.siteMetadata.audioFiles.map((demo, index) => {
            return (
              <div key={demo.title} className="audio">
                <h2>{demo.title}</h2>
                <audio className="js-player">
                  <source
                    src={data.allFile.edges[index].node.publicURL}
                    type="audio/mp3"
                  />
                </audio>
              </div>
            )
          })}
        </div>
      )
    }}
  />
)
