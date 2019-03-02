import React, { Component } from "react";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import SEO from "../components/seo";

//components
import Content from "../components/Content/Content";

//styles
import "../components/styles/photogallery.sass";

class photoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <SEO page="Gallery" />
        <Layout>
          <Content>
            <div className="photogallery">
              <div className="photogallery__container">
                <h2>Photo Gallery</h2>
                <div className="photogallery__container__grid">
                  {data.contentfulPhotoGallery.mainImageGallery.map(img => (
                    <div
                      className={`photogallery__container__grid__item ${
                        img.image.title === "full"
                          ? "photogallery__container__grid__item__full"
                          : " stu"
                      }`}
                    >
                      <Img fluid={img.image.fluid} />
                      <p>{img.image.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

// paperst6767
// SerbianWinter888%#7

// OneCommercial707
// BladeRunnerk6767

export const query = graphql`
  query {
    contentfulPhotoGallery {
      mainImageGallery {
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_noBase64
          }
          description
          title
        }
      }
    }
  }
`;

export default photoGallery;
