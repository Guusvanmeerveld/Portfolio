import Page from "@components/Page";
import Layout from "@components/Layout";

const Thanks = () => (
  <Page title="Thanks!" description="Thanks for submitting your contact form!">
    <Layout>
      <div className="page">
        <div>
          <div className="icon">❤️</div>
          <div className="header">Thank you!</div>
          <div className="subtitle">Your submission is greatly appreciated!</div>
          <a href="/" className="link button">
            Go back
          </a>
        </div>
      </div>
    </Layout>
  </Page>
);

export default Thanks;
