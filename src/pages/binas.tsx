import Page from "@components/Page";
import Layout from "@components/Layout";
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
        <Layout>
          <div className="binas">
            {this.links.map((link, i) => (
              <img key={i} src={link} alt="" />
            ))}
          </div>
        </Layout>
      </Page>
    );
  }
}

export default Binas;
