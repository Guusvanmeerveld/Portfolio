import Page from "../components/Page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Thanks = () => (
  <Page title="Thanks!" description="Thanks for submitting your contact form!">
    <Navbar />
    <div className="message">
      <div>
        <div className="icon">❤️</div>
        <div className="header">Thank you!</div>
        <div className="subtitle">Your submission is greatly appreciated!</div>
        <a href="/" className="link button">
          Go back
        </a>
      </div>
    </div>
    <Footer />
  </Page>
);

export default Thanks;
