import Page from "../components/Page";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LazyLoad from "react-lazyload";
import { Component } from "react";

class Binas extends Component {
  links: string[];

  constructor(props) {
    super(props);

    this.links = new Array();

    for (let i = 1; i < 305; i++) {
      this.links.push(this.link(i));
    }
  }

  link = (page) =>
    `https://cdp.contentdelivery.nu/1fa0c165-3b6c-4c5b-acee-a231157e66a3/20160908101125/extract/assets/img/layout/${page}.jpg`;

  render() {
    return (
      <Page title="Binas" description="Voor wanneer je effe de binas nodig hebt">
        <Navbar />
        <div className="binas">
          {this.links.map((link) => (
            <LazyLoad height={100} offset={100}>
              <img src={link} alt="" />
            </LazyLoad>
          ))}
        </div>
        <Footer />
      </Page>
    );
  }
}

export default Binas;
