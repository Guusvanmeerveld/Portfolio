import Page from "../components/Page";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Page description="A simple portfolio website to display my projects." title="Guus van Meerveld">
      <Navbar />
      <Landing />
      <Projects />
      <Contact />
      <Footer />
    </Page>
  );
}
