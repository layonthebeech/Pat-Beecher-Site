import React from "react"
import me from "./me.png"
import "../../styles/index.scss"
import AudioPlayer from "./AudioPlayer"
import Nav from "./Nav"
import { Helmet } from "react-helmet"
import Logo from "./Logo"
import { useStaticQuery } from "gatsby"

export default () => {
  // const logos = this.logos
  const data = useStaticQuery(
    graphql`
      query Sections {
        site {
          id
          siteMetadata {
            siteSections {
              id
              title
            }
          }
        }
      }
    `
  ).site.siteMetadata
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pat Beecher - Voice Actor - Chicago, IL</title>
      </Helmet>
      <Nav sections={data.siteSections} />
      {data &&
        data.siteSections &&
        data.siteSections.map((section, index) => {
          return (
            <div
              key={section.id}
              id={section.id}
              className={`container ${
                index % 2 === 0 ? " container--alt" : ""
              }`}
            >
              <h2 className="title">{section.title}</h2>
              {index === 0 && (
                <div>
                  <h2 className="subtitle">Voice Actor - Chicago, IL</h2>
                  <div className="profile">
                    <div className="profile__image">
                      <img src={me} alt="pat-beecher-icon" />
                    </div>
                    <AudioPlayer />
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="logos">
                  <Logo></Logo>
                </div>
              )}
              {index === 2 && (
                <div className="contact">
                  <form
                    id="fs-frm"
                    className="contact__form"
                    action="https://formspree.io/beecherp@gmail.com"
                    method="POST"
                  >
                    <fieldset id="fs-frm-inputs">
                      <label htmlFor="full-name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="full-name"
                        placeholder="First and Last"
                        required=""
                      />
                      <label htmlFor="email-address">Email Address</label>
                      <input
                        type="email"
                        name="_replyto"
                        id="email-address"
                        placeholder="email@domain.tld"
                        required=""
                      />
                      <label htmlFor="message">Message</label>
                      <textarea
                        rows="5"
                        name="message"
                        id="message"
                        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                        required=""
                      ></textarea>
                      <input
                        type="hidden"
                        name="_subject"
                        id="email-subject"
                        value="Contact Form Submission"
                      />
                    </fieldset>
                    <input type="submit" value="Submit"></input>
                  </form>
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}
