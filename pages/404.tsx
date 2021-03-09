import Page from "../components/Page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => (
  <Page title="Page not found" description="This page either doesn't exist or has been deleted">
    <Navbar />
    <div className="message">
      <div>
        <div className="header">Not found</div>
        <div className="subtitle">This page either doesn't exist or has been deleted</div>
        <a href="/" className="link button">
          Go back
        </a>
      </div>
    </div>
    <Footer />
  </Page>
);

export default NotFound;
