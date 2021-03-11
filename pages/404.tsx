import Page from "@components/Page";
import Layout from "@components/Layout";

const NotFound = () => (
  <Page title="Page not found" description="This page either doesn't exist or has been deleted">
    <Layout>
      <div className="page">
        <div>
          <div className="header">Not found</div>
          <div className="subtitle">This page either doesn't exist or has been deleted</div>
          <a href="/" className="link button">
            Go back
          </a>
        </div>
      </div>
    </Layout>
  </Page>
);

export default NotFound;
