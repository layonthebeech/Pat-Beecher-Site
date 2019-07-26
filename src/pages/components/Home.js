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
        <meta
          name="Description"
          content="Welcome to the website of professional Voice Actor and Debutante, Pat Beecher."
        ></meta>
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
              <div class="section">
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
                  <div className="who-i-am">
                    <p>
                      Hi, the name's Pat. It's a pleasure to make your
                      acquaintance. Do you have a need? Do you know what that
                      need is? Could that need be a voice? Not just any voice,
                      the voice of a generation (ish). Well then you've found
                      the right guy. But don't take my word for it, have a
                      listen to the demos above and hear the rich dulcet tones
                      that could soon be yours for a low cost of...well shoot me
                      an email if you want to know that.
                    </p>
                    <br></br>
                    <p>
                      Anyways, I'm glad you're here, and if you like what you
                      hear, reach out to me below! And if you're in the Chicago
                      area, I'm always happy to get coffee!
                    </p>
                  </div>
                )}
                {index === 2 && (
                  <div className="logos">
                    <Logo></Logo>
                  </div>
                )}
                {index === 3 && (
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
            </div>
          )
        })}
    </div>
  )
}
