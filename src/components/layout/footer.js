import React, { Component } from "react";
import "./footer.sass";
import BuiltBy from "./builtby";
import facbook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import email from "../../images/email.svg";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = this.props.data;
    return (
      <footer className="footer">
        <h3>Stay in Touch</h3>
        <p>
          Subscribe to my mailing list to receive updates and promotional
          offers.
        </p>
        <div className="signup">
          {/* <form action="">
            <input type="text" />
            <button className="submit">+</button>
          </form> */}
          <div id="mc_embed_signup">
            <form
              action="https://lynsmithgregory.us16.list-manage.com/subscribe/post?u=56d2cc89564b54bbaa353f7a0&amp;id=5e3a96be8f"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL" className="visuallyhidden">
                    Email Sign up
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_56d2cc89564b54bbaa353f7a0_5e3a96be8f"
                    tabIndex={-1}
                    defaultValue
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="+"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="icons">
          <a target="_blank" href={`mailto:${data.contactEmail}`}>
            {" "}
            <img src={email} width="17" height="17" alt="email icon" />
          </a>
          <a target="_blank" href={data.faceBookLink}>
            {" "}
            <img src={facbook} width="17" height="17" alt="facebook logo" />
          </a>
          <a target="_blank" href={data.instagramLink}>
            {" "}
            <img src={instagram} width="17" height="17" alt="instagram logo" />
          </a>
        </div>
        <BuiltBy />
      </footer>
    );
  }
}

export default Footer;
