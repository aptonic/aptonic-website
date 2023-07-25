import "../styles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropzone TinyURL Token Setup Guide",
};

export default function Page() {
  return (
    <div>
      <div id="wrapper">
        <div id="header-row">
          <div id="header-left">
            <div id="header-left-content">
              <div className="align-bottom">
                <h1 className="clarify-article-title">
                  Dropzone TinyURL Token Setup Guide
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div id="clarify-article-content">
          <div className="clarify-article-description">
            <p>
              You can sign up for a free{" "}
              <a href="https://tinyurl.com">TinyURL</a> account and link it to
              the Dropzone Shorten URL action by following the steps below.
            </p>
          </div>
          <div className="rule">
            <img src="/rule.png" alt="" />
          </div>
          <div id="clarify-step-10" className="clarify-step-container">
            <h2 className="clarify-step-title">Create a TinyURL API Token</h2>
            <div className="clarify-step-instructions">
              <p>
                Login with your account to TinyURL and click the account button
                in the top right:
              </p>
              <div className="clarify-step-image-container">
                <img
                  src="/help/tinyurl/step1.png"
                  className="clarify-step-image"
                  alt=""
                />
              </div>
              <p>Create an API Token in the API section:</p>
              <div className="clarify-step-image-container">
                <img
                  src="/help/tinyurl/step2.png"
                  className="clarify-step-image"
                  alt=""
                />
              </div>
              <p>
                Copy the newly created API Token into the Dropzone TinyURL
                action settings:
              </p>
              <div className="clarify-step-image-container">
                <img
                  src="/help/tinyurl/step3.png"
                  className="clarify-step-image"
                  alt=""
                />
              </div>
              <div className="clarify-step-image-container">
                <img
                  src="/help/tinyurl/step4.png"
                  className="clarify-step-image"
                  alt=""
                />
              </div>
              <p>
                Your TinyURL account is now linked with Dropzone and any URLs
                you shorten using Dropzone will show in your TinyURL account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
