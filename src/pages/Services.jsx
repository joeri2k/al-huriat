import React from "react";
import TopImage from "../components/TopImage";
import ServiceItem from "../components/ServiceItem";

function Services() {
  return (
    <div>
      <TopImage
        image_url="/assets/printing.webp"
        catching_phrase="Choose. Customize. Order."
        guide="Our Products"
        sub_phrase="Craft Your Business Identity in Just Three Simple Steps."
      />

      <div className="serviceGrid">
        <ServiceItem
          image_url="/assets/business-card.jpeg"
          content="We will help you create your customized business cards from a wide selection of papers, designs and finishing"
          title="Business Cards"
        />
        <ServiceItem
          image_url="/assets/books.jpeg"
          content="With a big variety of sizes, designs, types, colors and forms, we
              will make sure your brochures and flyers are as lively as possible"
          title="Brochures/Flyers"
        />
        <ServiceItem
          image_url="/assets/packaging.jpeg"
          content="From boxes and paper bags to folders and covers, bedsets,
              Goldcoins wraps and others, we will make sure your packaging
              materials stand out"
          title="Packaging Materials"
        />
        <ServiceItem
          image_url="/assets/envelops.jpeg"
          content="Leave a professional mark with your printed envelopes in different
              sizes, shapes and colors"
          title="Envelops"
        />
        <ServiceItem
          image_url="/assets/brochures.jpeg"
          content="With our wide printing portfolio of booklets and books, our team
              will help you bring your books to life"
          title="Books/Booklets"
        />
        <ServiceItem
          image_url="/assets/stickers.jpeg"
          content="Our team will assist you in customizing your stickers and vinil
              printouts as needed with different sizes, shapes, colors and
              designs"
          title="Stickers/Vinil"
        />
        <ServiceItem
          image_url="assets/forms.jpeg"
          content="Print your different business forms from invoice booklets,
              receipts and other business forms personalized with your logos,
              formats and numbering"
          title="Business Forms"
        />
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <div className="serviceBox">
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Business Cards
            </h1>
            <p>
              We will help you create your customized business cards from a wide
              selection of papers, designs and finishing
            </p>
          </div>
          <img src="/assets/business-card.jpeg" style={{ width: "35%" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <div className="serviceBox">
          <img src="/assets/brochures.jpeg" style={{ width: "35%" }} />
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Brochures/Flyers
            </h1>
            <p>
              With a big variety of sizes, designs, types, colors and forms, we
              will make sure your brochures and flyers are as lively as possible
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <div className="serviceBox">
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Packaging Materials
            </h1>
            <p>
              From boxes and paper bags to folders and covers, bedsets,
              Goldcoins wraps and others, we will make sure your packaging
              materials stand out
            </p>
          </div>
          <img src="/assets/packaging.jpeg" style={{ width: "35%" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <div className="serviceBox">
          <img src="/assets/envelops.jpeg" style={{ width: "35%" }} />
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Envelops
            </h1>
            <p>
              Leave a professional mark with your printed envelopes in different
              sizes, shapes and colors
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <div className="serviceBox">
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Books/Booklets
            </h1>
            <p>
              With our wide printing portfolio of booklets and books, our team
              will help you bring your books to life
            </p>
          </div>
          <img src="/assets/books.jpeg" style={{ width: "35%" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <div className="serviceBox">
          <img src="/assets/stickers.jpeg" style={{ width: "35%" }} />
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Stickers/Vinil
            </h1>
            <p>
              Our team will assist you in customizing your stickers and vinil
              printouts as needed with different sizes, shapes, colors and
              designs
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <div className="serviceBox">
          <div style={{ width: "60%" }}>
            <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Business Forms
            </h1>
            <p>
              Print your different business forms from invoice booklets,
              receipts and other business forms personalized with your logos,
              formats and numbering
            </p>
          </div>
          <img src="/assets/forms.jpeg" style={{ width: "35%" }} />
        </div>
      </div> */}
    </div>
  );
}

export default Services;
